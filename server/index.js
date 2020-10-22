const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/shop/:productId/:styleId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('*', (req, res) => {
  res.status(404).send();
});

// port 80 for the proxy server
const port = 80;

app.listen(port, () => {
  console.log(`Hugo's proxy server listening on port ${port}`);
});
