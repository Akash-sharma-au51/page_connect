const express = require('express');
require('dotenv').config();
const connection = require('./db.config'); // Ensure this file exports a function to connect to MongoDB

const userRoute = require('./Routes/userRoute');
const bookRoute = require('./Routes/bookRoute');

const port = process.env.PORT || 8000;
const app = express();

// Place Middleware Before Routes
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/books', bookRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to MongoDB
connection()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });