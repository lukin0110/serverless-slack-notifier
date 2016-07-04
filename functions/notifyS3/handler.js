'use strict';

module.exports.handler = function(event, context, cb) {
    console.log('Event received: ' + JSON.stringify(event));
    
    return cb(null, {
        message: 'Hello World'
    });
};
