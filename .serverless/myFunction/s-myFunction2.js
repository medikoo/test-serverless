var serverlessSDK = require('./serverless-sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
serviceName: 'test-1',
stageName: 'dev'})
const handlerWrapperArgs = { functionName: 'test-1-dev-myFunction2', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
