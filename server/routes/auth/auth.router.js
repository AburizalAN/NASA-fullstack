const express = require("express");
const authRouter = express.Router();
const { register, login, logout } = require("./auth.controller");
const { body, validationResult } = require("express-validator");

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  next();
};

authRouter.post(
  "/register",
  body("name")
    .notEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({ max: 48 })
    .withMessage("Maksimal 48 karakter"),
  body("email").isEmail().withMessage("Email tidak valid"),
  body("username").notEmpty().withMessage("username tidak boleh kosong"),
  body("password").notEmpty().withMessage("Password harus diisi"),
  body("gender")
    .custom((value) => {
      const genders = ["male", "female", null, undefined];
      return genders.includes(value);
    })
    .withMessage("Gender tidak sesuai"),
  handleValidation,
  register
);
authRouter.post(
  "/login",
  body("username").notEmpty().withMessage("username tidak boleh kosong"),
  body("password").notEmpty().withMessage("Password harus diisi"),
  handleValidation,
  login,
);
authRouter.post("/logout", logout);

module.exports = authRouter;
