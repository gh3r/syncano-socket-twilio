var globals = require('../utils/globals');
var client = require('twilio')(globals.accountSid, globals.accountToken);
var responses = require('../utils/responses');

client.queues.list(responses.handle);
