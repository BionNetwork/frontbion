
var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/api/', proxy({
  target: 'http://dev.bion-demo.etton.ru/',
  ///target: 'http://localhost:8080/',
  xfwd: true,
  headers: {
    'Host':'bion-demo.etton.ru',
    'Origin':'http://dev.bion-demo.etton.ru/'
  },
  logLevel:'debug'
}));

app.use('/', proxy({
  target: 'http://localhost:8080',
  ///target: 'http://localhost:8080/',
  xfwd: true,
  headers: {
    'Host':'localhost',
    'Origin':'http://localhost:8080'
  },
  logLevel:'debug'
}));

app.listen(4000);
