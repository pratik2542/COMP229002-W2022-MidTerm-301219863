/*
File Name - index.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 28-02-2022
*/

var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

module.exports = router;
