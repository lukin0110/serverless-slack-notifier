# serverless-slack-notifier

This is a Serverless project that offers 2 AWS Lambda functions that notifies a Slack channel about S3 & SNS events.

The best part is there are no servers required for this. You get charged only when its called and you don't need to 
worry about scaling :)

It requires that you have an AWS account and credentials that have **Full Admin rights** to the AWS since the 
deployment touches a variety of AWS resources.

## Features

* Notify a channel when an object is created or deleted in a S3 bucket
* Notify a channel when a message is published on a SNS topic
* Configurable S3 buckets and SNS Topics

## Getting started

### 1. Create a Slack webhook
[Create a Slack incoming webhook](https://api.slack.com/incoming-webhooks) for the channel that you want to send the 
notifications to.

### 2. Install the Serverless framework
```
$ sudo npm install serverless -g
```

### 3. Download the project
```
$ serverless project install serverless-slack-notifier
```

### 4. Configure the project

Open the `_meta/variables/s-variables-common.json` file and add/configure the following 3 parameters:
```
  "s3EventBucket": "dudeBucket",
  "snsTopicName": "dudeTopic",
  "slack_webhook": "https://hooks.slack.com/services/T0d3WTDR$/YT(5M3CJ2/29r5s6ANgxyjkZG6tvwABCDE"
```

### 5. Deploy the project

Install the required `node_modules`:
```
$ npm run init
```

Deploy it:
```
$ npm run deploy
```

## TODO
* notify about DynamoDB events
* notify about CloudWatch events
* notify about Kinesis events
* support multiple S3 buckets
* support multiple SNS topics

## Troubleshooting

Feel free to open a [GitHub issue](https://github.com/lukin0110/serverless-slack-notifier/issues) or bug me on Twitter
[@lukin0110](https://twitter.com/lukin0110).
