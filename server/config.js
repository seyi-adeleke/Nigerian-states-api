var path = require("path");
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development:{
        db:"mongodb://localhost/statesapi",
        rootPath:rootPath,
        port:process.env.PORT||9000

    },
    production:{
        db:process.env.PROD_DB,
        rootPath:rootPath,
        port:process.env.PORT||80
    }
};