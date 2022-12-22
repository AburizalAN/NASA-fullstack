const express = require('express');
const cors = require('cors');

const app = express();

//routes
const planetsRoutes = require('./routes/planets/planets.router');

app.use(cors());
app.use(express.json());

app.use('/planets', planetsRoutes)

module.exports = app;