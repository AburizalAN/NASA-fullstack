const dbPool = require("../config/database");

const qPosts = `select * from posts`;

const qPostById = `select * from posts where id = ?`

exports.getPosts = () => {
  return dbPool.execute(qPosts).then(([result]) => result);
};

exports.getPostById = (queries) => {
  return dbPool.execute(qPostById, [queries.id])
}
