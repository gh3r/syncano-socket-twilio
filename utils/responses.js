module.exports = {
  handle: function(err, response) {
    if(err) {
      return setResponse(new HttpResponse(err.status, `${JSON.stringify(err)}`, 'application/json'));
    };

    return setResponse(new HttpResponse(200, `${JSON.stringify(response)}`, 'application/json'));
  }
};
