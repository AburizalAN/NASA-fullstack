const dbPool = require("../config/database");

module.exports.getAllProducts = (req, res) => {
  const sqlQuery = `
    select p.name as "nama makanan", c.name as "Kategory", price from products as p
    join categories as c on (c.id = p.id_category)
    where c.name = ?
  `;
  return dbPool.execute(sqlQuery, ["makanan"])
}