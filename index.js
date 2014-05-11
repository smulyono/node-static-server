var express = require('express');
var compress = require('compression');
var app = express();

// compress
app.use(compress());

// route to static file
app.servePath = function(dir, path){
    app.use(dir, express.static(path));
};


app.serve = function(opt){
    if (typeof opt === "object"){
        for (var key in opt){
            app.use(key, express.static(opt[key]));
        }
    }
};

module.exports = app;
