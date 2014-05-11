var express = require('express');
var compress = require('compression');
var app = express();

// compress
app.use(compress());

// route to static file
app.serve = function(dir, path){
    app.use("/", express.static(path));
};


module.exports = app;
