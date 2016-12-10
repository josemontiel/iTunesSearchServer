var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = require("../utils/mongoUtil").getDb();
  db.collection("clicks").find().count(true, {}, function(e, count) {
    res.render('index', { title: 'iTunes Search Click Tracker', clickCount: count});

  });
});


module.exports = router;
