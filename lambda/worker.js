"use strict";
const aws = require('aws-sdk');

module.exports = {
  handler: async function(event, context) {
    
    const stepfunctions = new aws.StepFunctions();

    for (const record of event.Records) {
        let messageBody = JSON.parse(record.body);
        console.log(messageBody);
        let item = messageBody.input.items.pop();
        let items = messageBody.input.items;
        let taskToken = messageBody.taskToken;
        console.log(taskToken);
        let params = {
            output: JSON.stringify({
                      items: items, 
                      length: items.length}),
            taskToken: taskToken
        };

        console.log(`Calling Step Functions to complete callback task with params ${JSON.stringify(params)}`);
        
        await stepfunctions.sendTaskSuccess(params).promise();

    }
  }
}