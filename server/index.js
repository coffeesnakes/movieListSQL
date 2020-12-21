const express = require("express");
const port = 3003;
const app = express();
const db = require("../database/index.js");
const bodyParser = require("body-parser");
const path = require("path")
// app.get('/', (req, res) => {
//   res.send(`we're live on ${port}`)
// });

app.use(express.static(path.join(__dirname, "../", "client/dist")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, data, field) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, console.log(`listening on: ${port}`));
