'use strict'

const aws = require('aws-sdk')

module.exports.hello = (event, context, callback) => {
  let sns = new aws.SNS()

  let opts = {
    Message: 'payload from invoking lambda',
    TopicArn: process.env.mySnsTopicArn,
  };

  sns.publish(opts, (err, data) => {
    if (err) {
      console.log('error while sending message over sns: ' + err)
      callback(err, null)
    } else {
      const response = {
        statusCode: 200,
        body: 'message sent'
      }
      callback(null, response)
    }
  })
}

module.exports.ciao = (event, context, callback) => {
  let message = event.Records[0].Sns.Message
  console.log("received msg: " + message)
  const response = {
    statusCode: 200,
    body: 'ciao world'
  }
  callback(null, response)
}
