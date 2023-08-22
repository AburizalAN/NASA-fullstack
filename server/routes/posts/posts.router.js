const express = require("express");
const postsRouter = express.Router();
const {
  createPost,
  getPosts,
  getDetailPost,
  updatePost,
  uploadImage,
  getImages,
  getCategories,
  createCategory,
  deletePost,
} = require("./posts.controller");
const jwt = require("jsonwebtoken");
const requireLogin = require("../../middleware/requireLogin");
const handleValidation = require("../../middleware/handleValidation");
const { body } = require("express-validator");
const multer = require("multer");
const upload = multer();

postsRouter.get("/images", requireLogin, getImages);

postsRouter.get("/categories", getCategories);

postsRouter.get("/detail", getDetailPost);

postsRouter.post("/categories", requireLogin, createCategory);

postsRouter.post("/upload-image", requireLogin, uploadImage);

postsRouter.post(
  "/",
  requireLogin,
  body("title").custom((value) => {
    const isEmpty = typeof value !== "string" || value.trim().length === 0;
    if (isEmpty) {
      throw new Error("Title tidak boleh kosong");
    }
    return true;
  }),
  handleValidation,
  createPost
);

postsRouter.put("/:id", requireLogin, updatePost);

postsRouter.delete("/:id", requireLogin, deletePost);

postsRouter.get("/", getPosts);

module.exports = postsRouter;
