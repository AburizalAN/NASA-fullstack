const dbPool = require("../config/database");

const setUsers = ({ name, email, address }) => {
  const sqlQuery = `
    insert into users (fullname, username, email, address)
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

const getAllUsers = () => {
  const sqlQuery = `
    select * from users
  `;
  return dbPool.execute(sqlQuery);
};

const getUserById = (id) => {
  const columns = [
    "fullname",
    "username",
    "email",
    "gender",
    "address",
    "profile",
    "register_at",
    "avatar",
    "description",
    "role",
  ];
  const query = `select ${columns.join(", ")} from users where id = ?`;
  return dbPool.execute(query, [id]);
}

module.exports = {
  setUsers,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
