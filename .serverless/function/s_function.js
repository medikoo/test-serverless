var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
orgId: 'medikoo2',
applicationName: 'test',
appUid: 'GNJhWcBZ54LDjvC2rD',
orgUid: 'LWm4RQRZwxcB9mNFf2',
deploymentUid: '5ac879e8-a6ae-41b4-b4ce-ef6a8b73a0ed',
serviceName: 'test-dashboard-outputs',
shouldLogMeta: true,
disableAwsSpans: false,
disableHttpSpans: false,
stageName: 'dev',
pluginVersion: '3.5.0',
disableFrameworksInstrumentation: false})
const handlerWrapperArgs = { functionName: 'test-dashboard-outputs-dev-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
