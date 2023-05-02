const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.register = ({ email, username, password }) => {
  const sqlQuery = `
    select * from users
    where email = ? or username = ?
  `
  return dbPool.execute(sqlQuery, [email, username])
    .then(([result]) => {
      if (result.length) {
        throw {
          errorStatus: 409,
          message: "user already exists!",
        }
      };

      console.log("check req", req.body);

      // bcrypt.genSalt(saltRounds, function(err, salt) {
      //   bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
      //       // Store hash in your password DB.
      //   });
      // });
      return result;
    });
}