const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HvujSchema = new Schema({
    name:String,
    type:String
});

const Hvuj = mongoose.model('Hvuj', HvujSchema);

module.exports = Hvuj;

