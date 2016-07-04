'use strict';
const aws = require('aws-sdk');
const s3 = new aws.S3({apiVersion: '2006-03-01'});
const q = require('q');
const notify = require('../slack.js').notify;

module.exports.handler = function(event, context, cb) {
    // console.log('Event received: ' + JSON.stringify(event));
    
    // Get the object from the event and show its content type
    let bucket = event.Records[0].s3.bucket.name;
    let key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    let url = s3.getSignedUrl('getObject', {Bucket: bucket, Key: event.Records[0].s3.object.key});
    let text = 'S3 Object created: <' + url + '|' + key + '>';
    let webhook = process.env.SLACK_WEBHOOK;
    
    q.fcall(notify, webhook, text)
        .then(function() {
            cb(null, {
                message: text
            });
        })
        .fail(function(err) {
            console.log(err);
            context.fail(err);
        })
        .catch(function(err) {
            console.log(err);
            context.fail(err);
        })
        .done();
};
