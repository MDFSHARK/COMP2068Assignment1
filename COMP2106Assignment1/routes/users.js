/*File Name: users.js
  Author's Name: Mason Ferrie
  Website Name: Personal Portfolio
  File Description: Default Express File
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;
