const express = require("express");
const postsRouter = express.Router();
const { createPost, getPosts, getPostById, updatePost } = require("./posts.controller");
const jwt = require("jsonwebtoken");
const handleValidation = require("../../middleware/handleValidation");
const { body } = require("express-validator");

const requireLogin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      const err = new Error("Not Autheticated");
      err.errorStatus = 400;
      throw err;
    }
    const token = authHeader.split(" ")[1];
    const privateKey = process.env.JWT_SECRET_KEY;
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        const err = new Error("Token expired")
        err.errorStatus = 400;
        throw err;
      }
      next()
    })
  } catch (err) {
    next(err)
  }
}

postsRouter.get("/", getPosts);

postsRouter.get("/:id", getPostById);

postsRouter.post(
  "/:id",
  requireLogin,

  handleValidation,
  createPost,
);

postsRouter.put("/:id", requireLogin, updatePost);

postsRouter.delete("/:id", requireLogin, (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({ message: `create posts : ${id}` })
})

module.exports = postsRouter