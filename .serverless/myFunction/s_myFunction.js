var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: '7790f02c-e997-4038-94fe-411b203d05a3',
serviceName: 'test-dashboard-plugin',
stageName: 'dev',
pluginVersion: '3.2.4'})
const handlerWrapperArgs = { functionName: 'test-dashboard-plugin-dev-myFunction', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
