var mongoose = require ("mongoose");

module.exports = function(config) {
    mongoose.connect(config.db);
    console.log("connecting to -> " + config.db);

    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error... "));
    db.once("open", function callback() {
        console.log("Connection to database has been established")
    });

};
