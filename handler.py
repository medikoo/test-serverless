import json
import logging
from datetime import datetime, timedelta

import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)



def generate_token():
    # Obfuscated, just builds a token, nothing special
    return 'token_here'


def process(event, context):
    new_token = generate_token()

    logger.info("UpdateItem succeeded:")

    return new_token
