require('dotenv').config({ path: '.env.local' });


module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        API_ENDPOINT_LOCAL: process.env.REACT_APP_NODEJS,
        API_ENDPOINT_HEROKU: process.env.REACT_APP_HEROKU,
        API_ENDPOINT_PROGFY: process.env.REACT_APP_PROGFY,
    },
}