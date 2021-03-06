// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: 3306,
  user: process.env.USER,
  // NOTE: Be sure to add your MySQL password here!
  password: process.env.PASS,
  database: process.env.DB,
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
