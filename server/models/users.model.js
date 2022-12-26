const users = [];

const setUsers = (data) => {
  users.push(data);
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

module.exports = {
  setUsers,
  updateUser,
  deleteUser,
  users,
}