const mysql = require("mysql");

let host = "localhost";
let user = "root";
let password = "";
let database = "test";

class Database {
  constructor() {
    this.db = this.init();
    this.db.connect();
  }

  init() {
    return mysql.createConnection({
      host,
      user,
      password,
      database,
    });
  }

  query(sql, cb) {
    this.db.query(sql, (err, res) => {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
}

module.exports = Database;
