const path = require('path');
const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("app/public"));

const routes = require('./app/routing/apiRoutes');

app.use(routes)

app.listen(PORT, function () {
    console.log('listening on http://localhost:' + PORT);
});
