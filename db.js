const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "qwerty",
  host: "localhost",
  port: 5432,
  database: "dbms_cbs"
});

module.exports = pool;