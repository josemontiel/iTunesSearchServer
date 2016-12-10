var express = require('express');
var router = express.Router();


/* GET api listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.route('/event').post(function (req, res) {
    // Get User's IP for tracking
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    req.body.ip = ip;

    // Get Already Opened DB instance.
    var db = require("../utils/mongoUtil").getDb();

    // Insert Event into our db.
    db.collection('clicks').insertOne(req.body, {}, function() {
        res.send('Click Tracked');
    });



});

module.exports = router;
