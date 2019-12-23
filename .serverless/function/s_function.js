var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: '11f3be58-3497-443c-967a-4a356e800e9c',
serviceName: 'test-dashboard-api-gateway',
stageName: 'dev',
pluginVersion: '3.2.6'})
const handlerWrapperArgs = { functionName: 'test-dashboard-api-gateway-dev-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
