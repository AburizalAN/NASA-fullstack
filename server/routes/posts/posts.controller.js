const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  getCategories,
  createCategory,
  setPostCategory,
  getCategoriesByPostId,
  resetPostCategory,
} = require("../../models/posts.model");
const transaction = require("../../utils/transaction");
const sanitizeHtml = require('sanitize-html');
const getMilliseconds = require('date-fns/getMilliseconds');
const imagekit = require('../../config/imagekit');
const getTime = require('date-fns/getTime');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await getPosts();
    const promises = posts.map(async (post) => {
      const categories = await getCategoriesByPostId(post.id);
      return { ...post, categories };
    });
    const newPosts = await Promise.all(promises);
    res.status(200).json({
      message: "Success",
      data: newPosts,
    });
  } catch (err) {
    next(err)
  }
}

exports.getPostById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const [[ post ]] = await getPostById({ id });
    const categories = await getCategoriesByPostId(post.id);
    res.status(200).json({
      message: "Success",
      data: { ...post, categories },
    })
  } catch (err) {
    next(err)
  }
}

exports.createPost = async (req, res, next) => {
  try {
    const data = {
      author_id: req.body.author_id ?? null,
      title: req.body.title ?? null,
      content: req.body.content ?? null,
      published: req.body.published ? 1 : 0,
      parent_id: req.body.parent_id ?? null,
      meta_title: req.body.meta_title ?? null,
      slug: req.body.slug ?? null,
      summary: req.body.summary ?? null,
      created_at: req.body.created_at ?? null,
      update_at: req.body.update_at ?? null,
      published_at: req.body.published_at ?? null,
    };
  
    if (!data.slug) {
      const slug = data.title.toLowerCase().split(" ").join("-");
      data.slug = slug;
    };
  
    const categories = req.body.categories ?? [];

    const resTransaction = await transaction(async () => {
      const resData = await createPost(data);
      const id = resData[0].insertId;
      const promises = categories.map((categoryId) => setPostCategory(id, categoryId));
      await Promise.all(promises);
      return res.status(200).json({
        message: "Success",
        data: resData,
      });
    });
    return resTransaction;
  } catch (err) {
    next(err)
  };
}

exports.updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = structuredClone(req.body);
    if (data.categories) {
      delete data.categories
    };

    const categories = req.body.categories ?? [];

    if (data.content) {
      const sanitized = sanitizeHtml(data.content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
      });
      data.content = sanitized;
    };

    const resTransaction = await transaction(async () => {
      const resData = await updatePost(data, id);
      await resetPostCategory(id);
      const promises = categories.map((categoryId) => setPostCategory(id, categoryId));
      await Promise.all(promises);
      return res.status(200).json({
        message: "Success",
        data: resData,
      })
    });
    return resTransaction;
  } catch (err) {
    next(err);
  }
}

exports.uploadImage = async (req, res, next) => {
  try {
    const image = req.files.image[0];
    const milliseconds = getTime(new Date());
    const filename = `image-${milliseconds}`;
    imagekit.upload({
      file: image.buffer,
      fileName: filename,
      folder: 'blog'
    }, function(err, result) {
      if (err) throw err;
      return res.status(200).json({
        message: "Success",
        file: {
          url: result.url,
        }
      })
    })
  } catch (err) {
    next(err);
  }
}

exports.getImages = async (req, res, next) => {
  try {
    const limit = req.query.limit ?? 10;
    const page = req.query.page ?? 1;
    imagekit.listFiles({
      path: "blog",
      skip : (page - 1) * limit,
      limit : limit,
    }, (err, result) => {
      if (err) throw err;
      return res.status(200).json({
        message: "Success",
        data: result,
      })
    })
  } catch (err) {
    next(err);
  }
}

exports.getCategories = async (req, res, next) => {
  try {
    const resJSON = await getCategories();
    if (res) {
      return res.status(200).json({
        message: "Success",
        data: resJSON,
      })
    }
  } catch (err) {
    next(err)
  }
}

exports.createCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const resJSON = await createCategory(data);
    if (resJSON) {
      return res.status(200).json({
        message: "Success",
        data: resJSON,
      })
    }
  } catch (err) {
    next(err);
  }
}