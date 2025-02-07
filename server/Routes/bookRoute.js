const express = require('express');

const router = express.Router();

const isauthenticated = require('../middlewares/auth')

const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');

router.post('/books', isauthenticated, createBook);
router.get('/books', isauthenticated, getAllBooks);
router.get('/books/:id', isauthenticated, getBookById);
router.patch('/books/:id', isauthenticated, updateBook);
router.delete('/books/:id', isauthenticated, deleteBook);

module.exports = router;

