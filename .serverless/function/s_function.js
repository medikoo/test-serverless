var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
orgId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
orgUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: '78c958e0-1d99-432e-9a0c-3e68405b6444',
serviceName: 'test-dashboard-outputs',
stageName: 'dev',
pluginVersion: '3.2.7'})
const handlerWrapperArgs = { functionName: 'test-dashboard-outputs-dev-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
