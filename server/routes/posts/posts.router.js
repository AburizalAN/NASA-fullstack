const express = require("express");
const postsRouter = express.Router();
const { createPost, getPosts, getPostById } = require("./posts.controller");
const jwt = require("jsonwebtoken")

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

postsRouter.get("/", getPosts)

postsRouter.get("/:id", getPostById)

postsRouter.post("/:id", requireLogin, createPost)

postsRouter.put("/:id", requireLogin, (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({ message: `create posts : ${id}` })
})

postsRouter.delete("/:id", requireLogin, (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({ message: `create posts : ${id}` })
})

module.exports = postsRouter