'use strict';
const request = require('request');
const q = require('q');

/**
 * To get the slack hook url, go into slack admin and create a new "Incoming Webhook" integration
 *
 * @param webhook
 * @param text
 * @returns {*|promise}
 */
function notify(webhook, text) {
    let deferred = q.defer();

    let options = {
        url: webhook,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: text
        })
    };

    request.post(options, function(error, response, body) {
        if(error || response.statusCode !== 200) {
            console.log(body);
            console.log(error);
            deferred.reject(error);
        } else {
            console.log(body);
            deferred.resolve(body);
        }
    });

    return deferred.promise;
}

module.exports = {
    notify: notify
};
