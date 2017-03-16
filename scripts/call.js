var globals = require('../utils/globals');
var client = require('twilio')(globals.accountSid, globals.accountToken);

var callParams = {
    url: ARGS.url,
    to: ARGS.to,
    from: ARGS.from
};

client.calls.create(callParams, function(err, response) {
  if(err) {
    return setResponse(new HttpResponse(err.status, `${JSON.stringify(err)}`, 'application/json'));
  };

  return setResponse(new HttpResponse(200, `${JSON.stringify(response)}`, 'application/json'));
});
