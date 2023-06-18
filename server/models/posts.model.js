const dbPool = require("../config/database");

const qPosts = `select * from posts`;

const qPostById = `select * from posts where id = ?`;

exports.getPosts = () => {
  return dbPool.execute(qPosts).then(([result]) => result);
};

exports.getPostById = (queries) => {
  return dbPool.execute(qPostById, [queries.id]);
};

exports.createPost = (queries) => {
  const qCreatePost = `insert into posts(${Object.keys(queries).map((key) => key).join(", ")}) values (${Object.keys(queries).map(() => "?").join(", ")})`;
  return dbPool.execute(qCreatePost, [...Object.values(queries)]);
};

exports.updatePost = (queries, id) => {
  const queriesConverted = Object.entries(queries).map(([key, value]) => `${key} = ?`).join(", ");
  const qUpdatePost = `update posts set ${queriesConverted} where id = ?`;
  return dbPool.execute(qUpdatePost, [...Object.values(queries), id])
};
