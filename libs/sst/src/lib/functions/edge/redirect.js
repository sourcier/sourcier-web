const path = require('path');

exports.handler = (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const parsedPath = path.parse(request.uri);
  let newUri;

  if (parsedPath.ext === '') {
    newUri = path.join(parsedPath.dir, parsedPath.base, 'index.html');
  } else {
    newUri = request.uri;
  }

  request.uri = newUri;

  return callback(null, request);
};
