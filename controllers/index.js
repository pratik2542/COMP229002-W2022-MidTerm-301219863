/*
File Name - index.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 28-02-2022
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
