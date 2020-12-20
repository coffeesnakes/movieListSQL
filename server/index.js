const express = require('express');
const port = 4004;
const app = express();

app.get('/', (req, res) => {
  res.send(`we're live on ${port}`)
});

app.listen(port, console.log(`listening on: ${port}`));