const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const sqlQuery = `
  select * from users
  where email = ? or username = ?
`;
const q = `
  insert into users(fullname, username, email, password, gender, address, description, profile, avatar, role)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
const qCheckUsername = `
  select * from users
  where username = ?
`;

exports.register = (data) => {
  return dbPool
    .execute(sqlQuery, [data.email, data.username])
    .then(async ([result]) => {
      try {
        if (result.length) {
          throw {
            errorStatus: 409,
            message: "user already exists!",
          };
        }
        const hash = await bcrypt.hash(data.password, saltRounds);
        const res = await dbPool.execute(q, [
          data.fullname,
          data.username,
          data.email,
          hash,
          data.gender ?? null,
          data.address ?? null,
          data.description ?? null,
          data.profile ?? null,
          data.avatar ?? null,
          data.role ?? null,
        ]);
        return res;
      } catch (err) {
        throw err;
      }
    });
};

exports.login = (data) => {
  return dbPool
    .execute(qCheckUsername, [data.username])
    .then(async ([result]) => {
      try {
        if (!result.length) {
          const err = new Error("User not found!");
          err.errorStatus = 400;
          throw err;
        }
        const dataUser = result[0];
        const hashPass = dataUser.password;
        const isAuthenticated = await bcrypt.compare(data.password, hashPass);
        if (!isAuthenticated) {
          const err = new Error("Hei passwordmu salah");
          err.errorStatus = 400;
          throw err;
        }
        return {
          name: dataUser.name,
          username: dataUser.username,
          email: dataUser.email,
        };
      } catch (err) {
        throw err;
      }
    });
};

exports.getUserData = (data) => {
  return dbPool.execute(qCheckUsername, [data.username]).then(([result]) => {
    const dataUser = result[0];
    delete dataUser.password;
    return dataUser;
  });
};
