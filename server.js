let http = require ('http');
let url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, res, req);
  }

   http.createServer(onRequest).listen(8888);
   console.log("Server has started.");
 }


 exports.start = start;
