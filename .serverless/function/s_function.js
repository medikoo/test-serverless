
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'medikoo2',
  applicationName: 'test',
  appUid: 'GNJhWcBZ54LDjvC2rD',
  orgUid: 'LWm4RQRZwxcB9mNFf2',
  deploymentUid: 'fc413104-a248-415b-88c6-0d97eae6eca8',
  serviceName: 'test-dashboard-outputs',
  shouldLogMeta: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '3.6.6',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'test-dashboard-outputs-dev-function', timeout: 6 };

try {
  const userHandler = require('./index.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}