const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

// コマンド実行時にNODE_ENVを指定することで読み込むdotenvファイルを変える
const nodeEnv = process.env.NODE_ENV || 'development'
const envFilePath = path.resolve(__dirname, '../..', `.env.${nodeEnv}`)
console.info(`Loaded dotenv file "${envFilePath}"`)

const parseOutput = dotenv.parse(fs.readFileSync(envFilePath))

const envConfig = {}

for (const key in parseOutput) {
  // SEQUELIZE_から始まる変数のみを扱う
  if (/^SEQUELIZE_.+$/.test(key)) {
    envConfig[key] = parseOutput[key]
  }
}

module.exports = envConfig
