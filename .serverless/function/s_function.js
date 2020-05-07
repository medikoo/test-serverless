
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'medikoo',
  applicationName: 'medikoo-test',
  appUid: 'GjXh77HjWzffv8X5SQ',
  orgUid: '1sJrygBdcH5mNKPSp8',
  deploymentUid: '58c0d173-afe7-40b3-a814-ce245a4991d7',
  serviceName: 'test-dashboard',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '3.6.10',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'test-dashboard-dev-function', timeout: 6 };

try {
  const userHandler = require('./index.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}