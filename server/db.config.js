const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI;

const connectToDb = async () => {
    try {
        if (!uri) {
            throw new Error("Database URI is not defined. Check your .env file.");
        }

        await mongoose.connect(uri);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
    }
};

module.exports = connectToDb;
