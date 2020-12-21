const mysql = require("mysql");

const dbconnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3327',
  database: 'movielistsql'
});

dbconnect.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`connected to database!`)
  }
})


module.exports = dbconnect;
