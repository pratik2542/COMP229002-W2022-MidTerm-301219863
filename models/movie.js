/*
File Name - movie.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 28-02-2022
*/


let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);