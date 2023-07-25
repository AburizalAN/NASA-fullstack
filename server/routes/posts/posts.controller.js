const { getPosts, getPostById, createPost, updatePost } = require("../../models/posts.model");
const sanitizeHtml = require('sanitize-html');

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
    const [[ resData ]] = await getPostById({ id });
    res.status(200).json({
      message: "Success",
      data: resData,
    })
  } catch (err) {
    next(err)
  }
}

exports.createPost = async (req, res, next) => {
  const data = {
    author_id: req.body.author_id ?? null,
    title: req.body.title ?? null,
    content: req.body.content ?? null,
    published: req.body.published ?? null,
    parent_id: req.body.parent_id ?? null,
    meta_title: req.body.meta_title ?? null,
    slug: req.body.slug ?? null,
    summary: req.body.summary ?? null,
    created_at: req.body.created_at ?? null,
    update_at: req.body.update_at ?? null,
    published_at: req.body.published_at ?? null,
    category_id: req.body.category_id ?? null,
  }

  try {
    const resData = await createPost(data);
    return res.status(200).json({
      message: "Success",
      data: resData,
    })
  } catch (err) {
    next(err)
  };
}

exports.updatePost = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  const sanitized = sanitizeHtml(data.content);
  data.content = sanitized;

  try {
    const resData = await updatePost(data, id);
    return res.status(200).json({
      message: "Success",
      data: resData,
    })
  } catch (err) {
    next(err)
  }
}