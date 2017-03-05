var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    info: {
        name:String,
        motto:String,
        President: String,
        VicePresident: String,
        Population: Number,
        Capital: String,
        Area: Number,
        Demonym:String,
        Currency:String,
        OfficialLanguage:String,
        MajorLanguages:Array,
        Date_created: Date,
        Website: String
    }
});

module.exports = mongoose.model('Country',countrySchema);