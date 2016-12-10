var express = require('express');
var router = express.Router();


/* GET api listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.route('/event').get(function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var event = {
        type: 'click',
        ip: ip
    };

    var db = require("../utils/mongoUtil").getDb();
    db.collection('clicks').insertOne(event, {}, function() {
        res.send('Click Tracked');
    });



});

module.exports = router;
