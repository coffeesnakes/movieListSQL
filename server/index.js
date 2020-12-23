const express = require("express");
const port = 3003;
const app = express();
const db = require("../database/index.js");
const bodyParser = require("body-parser");
const path = require("path")

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, data, field) => {
    if (err) {
      res.sendStatus(400);
      res.send(err)
    } else {
      res.json(data);
    }
  });
});

app.post('/movies', (req, res) => {
  const {name, length, rating} = req.body;
  const q = `INSERT INTO movies (name, length, rating) VALUES (?, ?, ?)`;
  db.query(q, [name, length, rating], (err, results) => {
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('from db: ', results );
      res.sendStatus(200)
    }
  })
})
app.listen(port, console.log(`listening on: ${port}`));
