var express = require('express');
var router = express.Router();

/* GET our services page. */
router.get('/', function (req, res, next) {
  res.render('services', { title: 'Our Services' });
});

module.exports = router;
