const cors = require('cors');

const CorsOption = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELELE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionSuccessStatus: 200,
}

module.exports = cors(CorsOption);
