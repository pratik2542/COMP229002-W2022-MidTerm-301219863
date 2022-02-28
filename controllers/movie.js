/*
File Name - movie.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 28-02-2022
*/


// create a reference to the model



const { mongo, Mongoose } = require('mongoose');
const movie = require('../models/movie');
const { db } = require('../models/movie');
let Movie = require('../models/movie');

// Gets all movies from the Database and renders the page to list all movies.
module.exports.movieList = function(req, res, next) {  
    Movie.find((err, movieList) => {
        // console.log(movieList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('movie/list', {
                title: 'Favourite Movies List', 
                movies: movieList.sort((a, b) => a.Title.localeCompare(b.Title))
            });            
        }
    });
}

// Gets a movie by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    Movie.findById(id, (err, movieToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('movie/details', {
                title: 'Movie Details', 
                movie: movieToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Movie();

    res.render('movie/add_edit', {
        title: 'Add New Movie',
        movie: newItem,
        
    })         

}

// Processes the data submitted from the Add form to create a new movie
module.exports.processAddPage = (req, res, next) => {

    let newItem = Movie({
        _id: req.body.id,
        Title: req.body.Title,
        Year: req.body.Year,
        Synopsis: req.body.Synopsis,
        Director: req.body.Director,
        Genre: req.body.Genre,
        
    });

    Movie.create(newItem, (err, movie) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the movie list
            console.log(movie);
            res.redirect('/movie/list');
        }
    });

}

// Gets a movie by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;
    Movie.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('movie/add_edit', {
                title: 'Edit Movie', 
                movie: itemToEdit,                
            })
        }
    });

}

// Processes the data submitted from the Edit form to update a movie
module.exports.processEditPage = (req, res, next) => {
    
    let id = req.params.id
    
    let updatedItem = Movie({
        _id: req.body.id,
        Title: req.body.Title,
        Year: req.body.Year,
        Synopsis: req.body.Synopsis,
        Director: req.body.Director,
        Genre: req.body.Genre,       
    });

    

    Movie.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {

            res.redirect('/movie/list');
        }
    });
    
}

// Deletes a movie based on its id.
module.exports.performDelete = (req, res, next) => {
    
    let id = req.params.id;

    Movie.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/movie/list');
        }
    });

}