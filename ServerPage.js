'use strict'

const path = require('path')
const express = require('express')
const app = express()
const portHttp = 8045

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(portHttp);
