var express = require('express');
var app = express();
var  PORT = 3000;
app.use(express.static('node_modules'));
app.use(express.static('public'));
app.listen(PORT, function(){
    console.log('App is listening on port', PORT);
});