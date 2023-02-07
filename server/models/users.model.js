const users = [];

const dbPool = require("../config/database");

const setUsers = ({name, email, address}) => {
  const sqlQuery = `
    insert into users (name, email, address)
    values (?, ?, ?)
  `;
  return dbPool.execute(sqlQuery, [name, email, address]);
}

const updateUser = (id, data) => {
  return new Promise((resolve, reject) => {
    for (const user of users) {
      if (user.id == id) {
        const index = users.indexOf(user);
        users[index] = data;
        return resolve();
      }
    }

    const error = new Error("id tidak ditemukan");
    error.errorStatus = 403;
    error.data = data;
    return reject(error);
  })
}

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index > 0) {
    users.splice(index, 1)
  } else {
    const error = new Error("Id Tidak ditemukan");
    error.errorStatus = 403;
    throw error;
  }
}

const getAllUsers = (req, res) => {
  const sqlQuery = `
    select * from users
  `;
  return dbPool.execute(sqlQuery)
}

module.exports = {
  setUsers,
  getAllUsers,
  updateUser,
  deleteUser,
  users,
}