const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [3, 'First name must be at least {MINLENGTH} characters'],
    },

    lastName: {
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [3, 'Last name must be at least {MINLENGTH} characters'],
        
    }

}, { timestamps: true }
);

const Author = mongoose.model('author', AuthorSchema);

module.exports = { Author };
