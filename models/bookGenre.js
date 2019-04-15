const mongoose = require('mongoose');

// Genre Schema
let bookGenreSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const BookGenre = module.exports = mongoose.model('Book genre', bookGenreSchema, 'bookGenre');

// get Genres
module.exports.getGenres = function(callback, limit) {
    BookGenre.find(callback).limit(limit);
};

// Add genre
module.exports.addGenre = function(genre, callback) {
    BookGenre.create(genre, callback);
};

// Update genre
module.exports.updateGenre = function(id, genre, options, callback) {
    let query = {_id: id};
    let update = {
        name: genre.name
    };

    BookGenre.findOneAndUpdate(query, update, options, callback);
};

// Delete Genre
module.exports.removeGenre = function(id, callback) {
    let query = {_id: id};
    BookGenre.remove(query, callback);
};