const Book = require('../model/bookModel'); 


const createBook = async (req, res) => {
    try {
        const { title, author, genre, read, review } = req.body;

       
        if (!title || !author || !genre || read === undefined) {
            return res.status(400).json({ message: "All required fields must be provided" });
        }

        const newBook = new Book({ title, author, genre, read, review });
        const savedBook = await newBook.save();

        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
