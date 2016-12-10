/**
 * Created by Jose on 12/9/16.
 */
// MongoDB setup

var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

    // Creates a new connection to our MongoDB instance
    connectToServer: function( callback ) {
        MongoClient.connect('mongodb://AdKnowledge:Adknowledge2016@ds127948.mlab.com:27948/heroku_9bpsw2kz', function( err, db ) {
            _db = db;
            return callback( err );
        } );
    },

    // Get a DB instance.
    getDb: function() {
        return _db;
    }
};
