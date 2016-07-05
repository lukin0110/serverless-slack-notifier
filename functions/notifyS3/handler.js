'use strict';
const aws = require('aws-sdk');
const s3 = new aws.S3({apiVersion: '2006-03-01'});
const q = require('q');
const notify = require('../slack.js').notify;

module.exports.handler = function(event, context, cb) {
    console.log('Event received: ' + JSON.stringify(event));
    let webhook = process.env.SLACK_WEBHOOK;
    let text;

    let record = event.Records[0];
    let eventName = record['eventName'];
    let bucket = record.s3.bucket.name;
    let key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

    if(eventName.startsWith('ObjectCreated')) {
        let url = s3.getSignedUrl('getObject', {Bucket: bucket, Key: record.s3.object.key});
        text = 'S3 Object created: <' + url + '|' + key + '>';

    } else if(eventName.startsWith('ObjectRemoved')) {
        text = 'S3 Object removed: ' + bucket + '/' + key;
        
    } else {
        text = 'S3: unsupported action';
    }
    
    q.fcall(notify, webhook, text)
        .then(function() {
            cb(null, {
                message: text
            });
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
};
