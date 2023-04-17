const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [2, 'Name must be at least {MINLENGTH} characters'],
    },

    position: {
        type: String
        
    }

}, { timestamps: true }
);

const Player = mongoose.model('player', PlayerSchema);

module.exports = { Player};
