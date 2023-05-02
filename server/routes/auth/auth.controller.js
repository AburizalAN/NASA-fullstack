const formidable = require('formidable');
const { register } = require("../../models/auth.model");
const { validationResult } = require("express-validator");

exports.register = async (req, res, next) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        throw err
      }
      const data = {
        email: fields?.email,
        username: fields?.username,
        password: fields?.password 
      }
      const resData = await register(data);
      console.log(resData);
      res.status(200).json({
        message: "berhasil",
        data: resData,
      });
    } catch (err) {
      next(err);
    };
  })
};
exports.login = (req, res, next) => {};
exports.logout = (req, res, next) => {};