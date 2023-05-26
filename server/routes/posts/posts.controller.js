const { getPosts, getPostById } = require("../../models/posts.model");

exports.getPosts = async (req, res, next) => {
  try {
    const resData = await getPosts();
    res.status(200).json({
      message: "Success",
      data: resData,
    })
  } catch (err) {
    next(err)
  }
}

exports.getPostById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const resData = await getPostById({ id });
    res.status(200).json({
      message: "Success",
      data: resData,
    })
  } catch (err) {
    next(err)
  }
}

exports.createPost = (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({ message: `create posts : ${id}` });
}

exports.updatePost = (req, res, next) => {
  const id = req.params.id;
  return res.status(200).json({ message: `udpate posts : ${id}` })
}