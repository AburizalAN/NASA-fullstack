require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const upload = multer();

const app = express();

//routes
const planetsRoutes = require('./routes/planets/planets.router');
const usersRoutes = require('./routes/users/users.router');
const authRoutes = require('./routes/auth/auth.router');
const postsRoutes = require('./routes/posts/posts.router');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(upload.none());

app.use('/planets', planetsRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.use("/posts", postsRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({status, message, data})
});

module.exports = app;