'use strict'

const app = require('./index');

const PORT = 8080;
const HOST = '0.0.0.0';



app.listen(PORT, HOST);

console.log(`running on http://${HOST}:${PORT}`);