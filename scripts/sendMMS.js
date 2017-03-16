var globals = require('../utils/globals');
var client = require('twilio')(globals.accountSid, globals.accountToken);

var messageParams = {
  to: ARGS.to,
  from: ARGS.from,
  body: ARGS.body,
  mediaUrl: ARGS.mediaUrl
};

client.messages.create(messageParams, function(err, message) {
  if(err) {
    return setResponse(new HttpResponse(400, `${err.message}`, 'text/plain'));
  };

  return setResponse(new HttpResponse(200, `MMS to ${message.to} was send. Current status: ${message.status}.`, 'text/plain'));
});
