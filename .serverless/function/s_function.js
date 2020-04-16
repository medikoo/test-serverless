
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'medikoo',
  applicationName: 'medikoo-test',
  appUid: 'GjXh77HjWzffv8X5SQ',
  orgUid: '1sJrygBdcH5mNKPSp8',
  deploymentUid: '66220a62-c35d-42cc-b50f-d826c46ab348',
  serviceName: 'test-dashboard',
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

const handlerWrapperArgs = { functionName: 'test-dashboard-dev-function', timeout: 6 };

try {
  const userHandler = require('./index.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}