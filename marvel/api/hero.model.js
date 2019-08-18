const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Heros = new Schema({
    Hero_Name:{
        type: String
    },
    Hero_Planet:{
        type: String
    },
    Hero_Power:{
        type: String
    }

},{
    collection: 'marvel_heros'
});

module.exports = mongoose.model('Heros', Heros);