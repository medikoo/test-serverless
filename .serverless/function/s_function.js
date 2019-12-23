var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: 'da7f536b-7a3f-4ff7-b63c-1e4ebd464dff',
serviceName: 'test-dashboard',
stageName: 'dev',
pluginVersion: '3.2.6'})
const handlerWrapperArgs = { functionName: 'test-dashboard-dev-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
