var globals = require('../utils/globals');
var client = require('twilio')(globals.accountSid, globals.accountToken);

var createParams = {
  friendlyName: ARGS.name
};

client.queues.create(createParams, function(err, response) {
  if(err) {
    return setResponse(new HttpResponse(err.status, `${JSON.stringify(err)}`, 'application/json'));
  };

  return setResponse(new HttpResponse(200, `${JSON.stringify(response)}`, 'application/json'));
});
