/**
 * Created by seyi adeleke on 2/23/2017.
 */
"use strict";
var express = require("express");
require("dotenv").config();
var app = express();

var env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");
var config = require("./server/config")[env];

require("./server/mongoose")(config);
require("./server/express")(app, config);
require("./server/apiRoutes")(app);
