const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const sqlQuery = `
  select * from users
  where email = ? or username = ?
`;
const q = `
  insert into users(name, username, email, password, gender, address)
    values (?, ?, ?, ?, ?, ?)
`;
const qCheckUsername = `
  select * from users
  where username = ?
`;

exports.register = (data) => {
  const { email, username, password, gender, name, address } = data;
  return dbPool.execute(sqlQuery, [email, username]).then(async ([result]) => {
    try {
      if (result.length) {
        throw {
          errorStatus: 409,
          message: "user already exists!",
        };
      }
      const hash = await bcrypt.hash(password, saltRounds);
      const res = await dbPool.execute(q, [
        name,
        username,
        email,
        hash,
        gender,
        address,
      ]);
      return res;
    } catch (err) {
      throw err;
    }
  });
};

exports.login = (data) => {
  return dbPool.execute(qCheckUsername, [data.username]).then(async ([result]) => {
    try {
      if (!result.length) {
        const err = new Error("User not found!");
        err.errorStatus = 404;
        throw err;
      }
      const dataUser = result[0];
      const hashPass = dataUser.password;
      const isAuthenticated = await bcrypt.compare(data.password, hashPass);
      console.log("is auth", isAuthenticated);
      if (!isAuthenticated) {
        const err = new Error("Hei passwordmu salah");
        err.errorStatus = 404;
        throw err;
      }
      delete dataUser.password;
      return dataUser;
    } catch (err) {
      console.log("err", err);
      throw err;
    }
  });
}
