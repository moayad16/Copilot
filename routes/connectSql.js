const mysql = require("mysql");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Copilot",
  port: 3306,
});


// connect

const connectSql = () => {
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sql Connected");
    }
  });
};

// export
module.exports = 
{
    connectSql,
    connection
}
