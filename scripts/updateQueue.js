var globals = require('../utils/globals.js');
var client = require('twilio')(globals.accountSid, globals.accountToken);

var updateParams = {};

if (ARGS.name !== " ") {
  updateParams.friendlyName = ARGS.name;
}

if (ARGS.name !== " ") {
  updateParams.maxSize = ARGS.size;
}

client.queues(ARGS.sid)
  .update(updateParams, function(err, response) {
    if(err) {
      return setResponse(new HttpResponse(err.status, `${JSON.stringify(err)}`, 'application/json'));
    };

    return setResponse(new HttpResponse(200, `${JSON.stringify(response)}`, 'application/json'));
});
