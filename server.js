let http = require('http');
let url = require('url');



const start = (route, handle) => {
  function onRequest(req, response) {
    let postData = '';
    let pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    req.setEncoding('utf8');
    req.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('Received POST data chunk' + postDataChunk + '.');
    });
    req.addListener('end', function() {
      route(handle, pathname, response, postData);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
};
exports.start = start;
