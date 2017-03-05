var mongoose = require('mongoose');

var stateSchema = mongoose.Schema({
    Name:String,
    info: {
        officialName:String,
        Governor: String,
        DeputyGovernor: String,
        Population: Number,
        Slogan: String,
        Capital: String,
        Area: Number,
        Latitude: String,
        Longitude: String,
        Number_of_LGAS: Number,
        Date_created: Date,
        Website: String
    }
});

module.exports = mongoose.model('State',stateSchema);