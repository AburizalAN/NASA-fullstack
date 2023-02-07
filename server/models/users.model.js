const users = [];

const dbPool = require("../config/database");

const setUsers = ({ name, email, address }) => {
  const sqlQuery = `
    insert into users (name, email, address)
    values (?, ?, ?)
  `;
  return dbPool.execute(sqlQuery, [name, email, address]);
};

const updateUser = (id, data) => {
  const sqlQuery = `
    update users
    set name    = ?,
        email   = ?,
        address = ?
    where id = ? 
  `;
  return dbPool.execute(sqlQuery, [data.name, data.email, data.address, id]);
};

const deleteUser = (id) => {
  const sqlQuery = `
    delete from users where id = ${id}
  `;
  return dbPool.execute(sqlQuery);
};

const getAllUsers = (req, res) => {
  const sqlQuery = `
    select * from users
  `;
  return dbPool.execute(sqlQuery);
};

module.exports = {
  setUsers,
  getAllUsers,
  updateUser,
  deleteUser,
  users,
};
