const dbPool = require("../config/database");

const transaction = async (promise) => {
  try {
    await dbPool.query('START TRANSACTION');
    const res = await promise();
    await dbPool.query('COMMIT');
    return res;
  } catch (err) {
    await dbPool.query("ROLLBACK");
    throw err;
  }
}

module.exports = transaction