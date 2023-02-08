const express = require('express');
const authRouter = express.Router();
const {
  regisController
} = require('./auth.controller');

authRouter.post('/registration', regisController);

module.exports = authRouter;