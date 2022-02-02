import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslintPlugin from 'vite-plugin-eslint'

const BASE_PATH = '/'
const CLIENT_PUBLIC_ENV_PREFIX = 'PUBLIC_'
const ROOT_DIR_PATH = resolve(__dirname, 'src')
const PUBLIC_ASSETS_DIR_PATH = resolve(__dirname, 'static')
const OUTPUT_DIR_PATH = resolve(__dirname, 'dist')
const ENV_DIR_PATH = __dirname

export default defineConfig(({ mode }) => {
  const isProductionMode = mode === 'production'
  const appVersion = isProductionMode ? process.env.npm_package_version : `${process.env.npm_package_version}-${mode}`
  const esbuildPure = isProductionMode ? ['console.log', 'console.info', 'console.debug', 'console.trace'] : undefined

  return {
    root: ROOT_DIR_PATH,
    publicDir: PUBLIC_ASSETS_DIR_PATH,
    envDir: ENV_DIR_PATH,
    envPrefix: CLIENT_PUBLIC_ENV_PREFIX,
    base: BASE_PATH,
    build: {
      outDir: OUTPUT_DIR_PATH,
      emptyOutDir: true,
      manifest: true,
    },
    esbuild: {
      pure: esbuildPure,
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      eslintPlugin({ cache: true, fix: false, throwOnWarning: true, throwOnError: true }),
      createHtmlPlugin({
        minify: true,
        entry: 'index.tsx',
        template: 'index.html',
        inject: {
          data: {
            appVersion,
          },
        },
      }),
    ],
    resolve: {
      alias: [{ find: '~', replacement: ROOT_DIR_PATH }],
    },
  }
})
