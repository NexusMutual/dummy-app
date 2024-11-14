const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.get('/cool', (req, res) => {
  res.send('Ice cold!');
});

app.listen(port, () => {
  console.log(`Server running with hotfix`);
});
