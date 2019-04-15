const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Models
const BookGenre = require('../models/bookGenre');
const Book = require('../models/book');

router.get('/books', ensureAuthenticated, (req, res) => {
    Book.getBooks(function(err, books) {
        if (err) {
            throw err;
        }

        res.json(books);
    })
});

router.post('/books', (req, res) => {
    let book = req.body;
    Book.addBook(book, function(err, book) {
        if (err) {
            throw err;
        }

        res.json(book);
    })
});

router.get('/books/:_id', ensureAuthenticated, (req, res) => {
    Book.getBookById(req.params._id, function(err, book) {
        if (err) {
            throw err;
        }

        res.json(book);
    })
});

router.put('/books/:_id', (req, res) => {
    let id = req.params._id;
    let book = req.body;

    Book.updateBook(id, book, {}, function(err, book) {
        if (err) {
            throw err;
        }

        res.json(book);
    })
});

router.delete('/books/:_id', (req, res) => {
    let id = req.params._id;

    Book.removeBook(id, function(err, book) {
        if (err) {
            throw err;
        }

        res.json(book);
    })
});

router.get('/genres', ensureAuthenticated, (req, res) => {
    BookGenre.getGenres(function(err, genres) {
        if (err) {
            throw err;
        }

        res.json(genres);
    })
});

router.post('/genres', (req, res) => {
    let genre = req.body;


    BookGenre.addGenre(genre, function(err, genre) {
        if (err) {
            throw err;
        }

        res.json(genre);
    })
});

router.put('/genres/:_id', (req, res) => {
    let id = req.params._id;
    let genre = req.body;

    BookGenre.updateGenre(id, genre, {}, function(err, genre) {
        if (err) {
            throw err;
        }

        res.json(genre);
    })
});

router.delete('/genres/:_id', (req, res) => {
    let id = req.params._id;

    BookGenre.removeGenre(id, function(err, genre) {
        if (err) {
            throw err;
        }

        res.json(genre);
    })
});

module.exports = router;