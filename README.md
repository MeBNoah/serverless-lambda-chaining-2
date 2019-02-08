# serverless-lambda-chaining-2

This is an example for chaining AWS Lambda Functions with the Serverless Framework. This time using SNS to decouple the Lambda Functions.


## Prerequisites

* You have made your AWS access and secret key available through a provided method, like storing them in the ~/.aws/credentials file or export them into environment variables
* You need to install Node.js with a minimum version of 6.5.0 
* Then you need to install the serverless CLI with `sudo npm install -g serverless`


## Deploy

* `npm install`
* `serverless deploy -v`


## Invoke

Now you could invoke the Lambda with `serverless invoke -f hello -l`. If everything went fine, you will se a status message that says 200, `message sent`. After that you could invoke `serverless logs -f ciao` in order to see if the second lambda received the message via SNS. Note that the second Lambda Function will sleep until it receives a Message via SNS.


## Undeploy

* `serverless remove`
