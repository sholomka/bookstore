const mongoose = require('mongoose');

// Book Schema
let bookSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    genreId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Book = module.exports = mongoose.model('Book', bookSchema, 'books');

// get Books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
};
// get Book
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
};

// Add genre
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
};

// Update book
module.exports.updateBook = function(id, book, options, callback) {
    let query = {_id: id};
    let update = {
        name: book.name,
        description: book.description,
        genreId: book.genreId,
    };

    Book.findOneAndUpdate(query, update, options, callback);
};

// Delete Genre
module.exports.removeBook = function(id, callback) {
    let query = {_id: id};
    Book.remove(query, callback);
};