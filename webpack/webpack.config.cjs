const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv-webpack')
const copyPlugin = require('copy-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const eslintWebpackPlugin = require('eslint-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const headerMessage = require('./scripts/header-message.cjs')

const PUBLIC_PATH = '/'
const ROOT_DIR_PATH = path.resolve(__dirname, '..')
const SRC_DIR_PATH = path.join(ROOT_DIR_PATH, 'src')
const STATIC_DIR_PATH = path.join(ROOT_DIR_PATH, 'static')
const OUTPUT_DIR_PATH = path.join(ROOT_DIR_PATH, 'dist')
const ENTRY_FILENAME = 'index.tsx'
const DEV_SERVER_PORT = 3000

module.exports = (env, argv) => {
  const mode = argv.mode
  const isProductionMode = mode === 'production'
  const appVersion = isProductionMode ? process.env.npm_package_version : `${process.env.npm_package_version}-${mode}`

  headerMessage(mode, appVersion)

  return {
    entry: path.resolve(SRC_DIR_PATH, ENTRY_FILENAME),
    resolve: {
      modules: [path.resolve(ROOT_DIR_PATH, 'node_modules')],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '~': SRC_DIR_PATH,
      },
    },
    output: {
      path: OUTPUT_DIR_PATH,
      publicPath: PUBLIC_PATH,
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/i,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: [miniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(svg|gif|jpe?g|png|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new terserPlugin({
          terserOptions: {
            compress: {
              // 次のものはproductionモードのときに除かれる
              pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.debug'],
            },
          },
          extractComments: 'all',
        }),
        new cssMinimizerWebpackPlugin(),
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        APP_VERSION: appVersion,
        PUBLIC_PATH,
      }),
      new dotenv({
        path: path.join(ROOT_DIR_PATH, `.env.${mode}`),
        ignoreStub: true,
        // ファイルがない場合を考慮
        silent: true,
      }),
      new copyPlugin({
        patterns: [
          {
            from: STATIC_DIR_PATH,
            to: OUTPUT_DIR_PATH,
          },
        ],
      }),
      new htmlWebpackPlugin({
        template: path.join(SRC_DIR_PATH, 'index.html'),
        // テンプレートで利用する変数
        APP_VERSION: appVersion,
        PUBLIC_PATH,
      }),
      new eslintWebpackPlugin({
        extensions: ['ts', 'tsx', 'js', 'jsx'],
      }),
      new miniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
    devServer: {
      port: DEV_SERVER_PORT,
      historyApiFallback: true,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
    },
  }
}
