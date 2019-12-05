let http = require('http');
let url = require('url');



const start = (route, handle) => {
  function onRequest(req, response) {
    let pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    
    route(handle, pathname, response);
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
};
exports.start = start;
