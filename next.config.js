const appInfo = require('./package.json')

module.exports = {
  target: 'serverless',
  env: {
    VERSION: process.env.VERSION || appInfo.version
  }
}
