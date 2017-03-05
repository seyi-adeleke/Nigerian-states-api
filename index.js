/**
 * Created by seyi adeleke on 2/23/2017.
 */
var express = require('express');
var app = express();

var env = process.env.NODE_ENV =  process.env.NODE_ENV || "development";
var config = require("./server/config")[env];



require("./server/mongoose")(config);
require("./server/express")(app,config);
require("./server/apiRoutes")(app);

