// Create web server
// Create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = require('./comments.json');
var _ = require('underscore');
var _s = require('underscore.string');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/comments', function(req, res) {
  res.json(comments);
});

app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),}})
    // id: Date.now(),