const express = require('express');
const port = 4004;
const app = express();
const db = require ('../database/index.js');
const bodyParser = require('body-parser');

// app.get('/', (req, res) => {
//   res.send(`we're live on ${port}`)
// });

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, data, field) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      console.log(data)
      res.send(rows);
    }
  })
})

app.listen(port, console.log(`listening on: ${port}`));
