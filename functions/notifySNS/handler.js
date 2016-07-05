'use strict';
const q = require('q');
const notify = require('../slack.js').notify;

module.exports.handler = function(event, context, cb) {
    // console.log('Event received: ' + JSON.stringify(event));
    let webhook = process.env.SLACK_WEBHOOK;
    let records = event.Records;

    if(records !== undefined && records.length > 0 && records[0].Sns) {
        let rec = records[0];
        let message = 'Message on *' + rec.Sns.TopicArn + '*: ' + JSON.stringify(rec.Sns.Message, null, ' ');

        q.fcall(notify, webhook, message)
            .then(function() {
                cb(null, {message: 'posted to slack'});
            })
            .fail(function(err) {
                console.log(err);
                cb(err);
            })
            .catch(function(err) {
                console.log(err);
                cb(err);
            })
            .done();
        
    } else {
        cb(new Error('No SNS records found'));
    }
};
