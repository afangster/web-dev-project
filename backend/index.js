const http = require('http');
const url = require('url');
const login = require('./login');

var server = http.createServer((req, res) => {
  const { method } = req;
  const baseURL = 'http://' + req.headers.host + '/';
  const url = new URL(req.url, baseURL);
  // console.log(url);
  if (method === 'POST') {
    switch (url.pathname) {
      case '/signup':
        console.log('here');
        login.handleSignupRequest(req, res);
        break;
      case '/login':
        login.handleLoginRequest(url, res);
        break;
      default:
        res.statusCode = 400;
        res.write('Unrecognize path');
        break;
    }
  } else if (method === 'GET') {
    console.log(url.pathname)
    switch (url.pathname) {
      case '/':
        break;
      case '/login':
        login.handleLoginRequest(url, res);
        break;
      default:
        res.statusCode = 400;
        res.write('Unrecognize path');
        break;
    }
  } else if (method === 'PUT') {
    switch (url.pathname) {
      default:
        res.statusCode = 400;
        res.write('Unrecognize path');
        break;;
    }
  } else if (method === 'DELETE') {
    switch (url.pathname) {
      case '/cancel':
        login.handleCancleRequest(req, res);
        break;
      default:
        res.statusCode = 400;
        res.write('Unrecognize path');
        break;
    }
  } else {
    res.statusCode = 400;
    res.write('Unrecognize method');
  }
  res.end("Hello world");
})

server.listen(3030, () => {
  console.log("Service is listening to at port 3030");
});
