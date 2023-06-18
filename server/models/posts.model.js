const dbPool = require("../config/database");

exports.getPosts = () => {
  const qPosts = `select * from posts`;
  return dbPool.execute(qPosts).then(([result]) => result);
};

exports.getPostById = (queries) => {
  const qPostById = `select * from posts where id = ?`;
  return dbPool.execute(qPostById, [queries.id]);
};

exports.createPost = (queries) => {
  const qCreatePost = `insert into posts(${Object.keys(queries).map((key) => key).join(", ")}) values (${Object.keys(queries).map((key) => `:${key}`).join(", ")})`;
  return dbPool.execute(qCreatePost, queries);
};

exports.updatePost = (queries, id) => {
  const queriesConverted = Object.entries(queries).map(([key, value]) => `${key} = :${key}`).join(", ");
  const qUpdatePost = `update posts set ${queriesConverted} where id = :id`;
  return dbPool.execute(qUpdatePost, {...queries, id})
};
