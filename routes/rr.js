var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/demo', function(req, res, next) {
  res.send('respond with a resource demo');
});

module.exports = router;