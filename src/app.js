'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("I love TeamTreeHouse!");
});

app.listen(3000);
