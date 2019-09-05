var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: '9611c0a6-6c93-44b2-b3c1-425973ba09ff',
serviceName: 'test-dashboard-plugin',
stageName: 'dev',
pluginVersion: '1.3.10'})
const handlerWrapperArgs = { functionName: 'test-dashboard-plugin-dev-myFunction', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
