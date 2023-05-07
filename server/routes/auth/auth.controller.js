const formidable = require("formidable");
const { register, login } = require("../../models/auth.model");

exports.register = async (req, res, next) => {
  try {
    const data = {
      name: req.body?.name,
      email: req.body?.email,
      username: req.body?.username,
      password: req.body?.password,
      gender: req.body?.gender ?? null,
      address: req.body?.address ?? null,
    };
    const resData = await register(data);
    res.status(200).json({
      message: "berhasil",
      data: resData,
    });
  } catch (err) {
    next(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    const data = {
      username: req.body.username,
      password: req.body.password,
    };
    const resData = await login(data);
    res.status(200).json({
      message: "Berhasil",
      data: resData,
    });
  } catch (err) {
    next(err);
  }
};
exports.logout = (req, res, next) => {};
