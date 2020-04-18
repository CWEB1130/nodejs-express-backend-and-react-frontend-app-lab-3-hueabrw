var express = require('express');
var offers = require('../offers.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(offers)
});

module.exports = router;
