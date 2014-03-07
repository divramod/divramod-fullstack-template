var http = require('http')
, httpProxy = require('http-proxy');
 
httpProxy.createServer({
  hostnameOnly: true,
  router: {
    'localhost:3000': 'localhost:3007',
    'http://test': 'localhost:3007',
  }
}).listen(80);
