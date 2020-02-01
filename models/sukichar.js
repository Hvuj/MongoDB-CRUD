const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema

const SukiCharSchema = new Schema({
    name:String,
    last_name:String
});

const SukiChar = mongoose.model('sukichar', SukiCharSchema);

module.exports = SukiChar;

