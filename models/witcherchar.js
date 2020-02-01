const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema

const WitcherCharSchema = new Schema({
    name:String,
    weight:Number
});

const WitcherChar = mongoose.model('witcherchar', WitcherCharSchema);

module.exports = WitcherChar;