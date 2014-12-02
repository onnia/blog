// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

var dbUrl = process.env.CLEARDB_DATABASE_URL;
var connection = {
	charset  : 'utf8'
};
if (dbUrl) {
	// FIXME: educational purposes
	var credential = dbUrl.split('@').shift().split('://').pop().split(':');
	connection.host = dbUrl.split('@').pop().split('/').shift();
	connection.user = credential.shift();
	connection.password = credential.pop();
	connection.database = dbUrl.split('@').pop().split('/').pop().split('?').shift();
}
config = {
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blogs published URL.
        url: 'http://fish-stories.herokuapp.com',
        database: {
            client: 'mysql',
            connection: connection,
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT || '2368'
        }
     }
};

// Export config
module.exports = config;