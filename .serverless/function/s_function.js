var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
orgId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
orgUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: '6f347a8b-c595-423f-867c-b168b672cd50',
serviceName: 'test-dashboard',
stageName: 'dev',
pluginVersion: '3.3.0'})
const handlerWrapperArgs = { functionName: 'test-dashboard-dev-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
