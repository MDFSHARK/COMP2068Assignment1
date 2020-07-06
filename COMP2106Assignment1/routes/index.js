'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Welcome to Mason Ferries Personal Portfolio' });
});

/*Route to about me page */
router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});

/*Route to projects page */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

/*Route to services page */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/*Route to contact me page */
router.get('/contactme', function (req, res) {
    res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;
