const dbPool = require("../config/database");

exports.getPosts = () => {
  const qPosts = `select * from posts`;
  return dbPool.execute(qPosts).then(([result]) => result);
};

exports.getPostById = (queries) => {
  const qPostById = `select * from posts where id = ?`;
  return dbPool.execute(qPostById, [queries.id]);
};

exports.getPostBySlug = (queries) => {
  const qPostById = `select * from posts where slug = ?`;
  return dbPool.execute(qPostById, [queries.slug]);
};

exports.createPost = (queries) => {
  const qCreatePost = `insert into posts(${Object.keys(queries).map((key) => key).join(", ")}) values (${Object.keys(queries).map((key) => `:${key}`).join(", ")})`;
  return dbPool.execute(qCreatePost, queries);
};

exports.updatePost = (queries, id) => {
  const queriesConverted = Object.entries(queries).map(([key, value]) => `${key} = :${key}`).join(", ");
  const qUpdatePost = `update posts set ${queriesConverted} where id = :id`;
  return dbPool.execute(qUpdatePost, { ...queries, id })
};

exports.getCategories = () => {
  const query = `select * from categories`;
  return dbPool.execute(query).then(([result]) => result);
}

exports.createCategory = (queries) => {
  const query = `insert into categories (${Object.keys(queries).map((key) => key).join(", ")}) values(${Object.keys(queries).map((key) => `:${key}`).join(", ")})`;
  return dbPool.execute(query, queries);
}

exports.updateCategory = (queries, id) => {
  const queriesConverted = Object.keys(queries).map((key) => `${key} = :${key}`).join(", ");
  const query = `update categories set (${queriesConverted}) where id = :id`;
  return dbPool.execute(query, { ...queries, id });
}

exports.resetPostCategory = (postId) => {
  const queryReset = `delete from post_category where postId = ?`;
  return dbPool.execute(queryReset, [postId]);
}

exports.setPostCategory = (postId, categoryId) => {
  const query = `insert into post_category (postId, categoryId) values (?, ?)`;
  return dbPool.execute(query, [postId, categoryId]);
}

exports.getCategoriesByPostId = (postId) => {
  const query = `select * from categories inner join post_category on (post_category.categoryId = categories.id) where postId = ?`;
  return dbPool.execute(query, [postId]).then(([result]) => result);
}