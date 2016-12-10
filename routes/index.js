var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Get Already Opened DB instance.
  var db = require("../utils/mongoUtil").getDb();

  // Query current Click count from DB. A better solution is to keep this value in memory instead of querying it
  // everytime the website is requested and just query it when the application starts.

  db.collection("clicks").find().count(true, {}, function(e, count) {
    // Return website with click count.
    res.render('index', { title: 'iTunes Search Click Tracker', clickCount: count});

  });
});


module.exports = router;
