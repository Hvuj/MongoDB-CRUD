const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema

const TestCharSchema = new Schema({
    name:String,
    last_name:String
});

const TestChar = mongoose.model('testchar', TestCharSchema);

module.exports = TestChar;