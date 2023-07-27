const express = require("express");
const postsRouter = express.Router();
const { createPost, getPosts, getPostById, updatePost, uploadImage } = require("./posts.controller");
const jwt = require("jsonwebtoken");
const requireLogin = require("../../middleware/requireLogin");
const handleValidation = require("../../middleware/handleValidation");
const { body } = require("express-validator");
const multer = require('multer');
const upload = multer();

postsRouter.get("/", getPosts);

postsRouter.get("/:id", getPostById);

postsRouter.post(
  "/",
  requireLogin,
  handleValidation,
  createPost
);

postsRouter.put("/:id", requireLogin, updatePost);

postsRouter.delete("/:id", requireLogin, (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({ message: `create posts : ${id}` });
});

postsRouter.post("/:id/upload-image", requireLogin, uploadImage);

module.exports = postsRouter;