import serverless_sdk
sdk = serverless_sdk.SDK(
    org_id='medikoo',
    application_name='medikoo-test',
    app_uid='GjXh77HjWzffv8X5SQ',
    org_uid='1sJrygBdcH5mNKPSp8',
    deployment_uid='4324022a-6f23-46e9-8880-e4903ff2caa2',
    service_name='issue-8076',
    should_log_meta=True,
    should_compress_logs=True,
    disable_aws_spans=False,
    disable_http_spans=False,
    stage_name='dev',
    plugin_version='3.7.0',
    disable_frameworks_instrumentation=False
)
handler_wrapper_kwargs = {'function_name': 'dev-issue-8076-pre-sign-up', 'timeout': 6}
try:
    user_handler = serverless_sdk.get_user_handler('handler.hello')
    handler = sdk.handler(user_handler, **handler_wrapper_kwargs)
except Exception as error:
    e = error
    def error_handler(event, context):
        raise e
    handler = sdk.handler(error_handler, **handler_wrapper_kwargs)
