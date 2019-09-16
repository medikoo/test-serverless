var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: 'cae614af-2abb-432e-b47e-28c4da474cfe',
serviceName: 'test-dashboard-plugin',
stageName: 'dev',
pluginVersion: '2.0.0'})
const handlerWrapperArgs = { functionName: 'test-dashboard-plugin-dev-myFunction', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
