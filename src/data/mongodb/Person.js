var mongoose = require('mongoose');

var personModelSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    age: String,
    sex : Boolean,
});

var Person = mongoose.model('personModel', personModelSchema);
module.exports = Person;