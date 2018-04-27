require('dotenv').config();
const express = require('express');
const routes = require('./app/routes/routes.js');
const PORT = process.env.PORT || 8427;
var app = express();

app.use(routes);
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
