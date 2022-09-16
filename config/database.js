const { createPool } = require("mysql");

const pool = createPool({
  port: 8000,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gym',
  connectionLimit: 10,
});



module.exports = pool;
