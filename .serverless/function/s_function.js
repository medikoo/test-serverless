var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
orgId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
orgUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: 'bc26ba49-0a01-4ebc-8916-581d530a3dd6',
serviceName: 'test-dashboard',
stageName: 'many-params',
pluginVersion: '3.3.0'})
const handlerWrapperArgs = { functionName: 'test-dashboard-many-params-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
