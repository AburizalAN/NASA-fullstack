const formidable = require("formidable");
const { register, login, getUserData } = require("../../models/auth.model");
const jwt = require("jsonwebtoken");

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
    const privateKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(resData, privateKey, { expiresIn: "1h" });
    res.status(200).json({
      message: "Berhasil",
      data: token,
    });
  } catch (err) {
    next(err);
  }
};
exports.getUserInfo = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      const err = new Error("Not Autheticated");
      err.errorStatus = 400;
      throw err;
    }
    const token = authHeader.split(" ")[1];
    const privateKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, privateKey, privateKey);
    console.log("decoded", decoded);
    const data = await getUserData(decoded);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    err.errorStatus = 400;
    next(err);
  }
};
exports.logout = (req, res, next) => {};
