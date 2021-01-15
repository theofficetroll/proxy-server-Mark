require('newrelic');

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fetch = require('node-fetch');

const app = express();

// port 4000 for the proxy server
const port = 4000;

// addresses
const redisURL = "3.139.103.221";
const productLocal = "http://127.0.0.7:3008";

// redis setup
// const redis = require('redis');
// const redisClient = redis.createClient({ host: "localhost", port: 6379 });
// redisClient.on('connect', function() {
//   console.log('Redis is connected');
// });

// redisClient.on('error', function*() {
//   console.log('Error in Redis');
// });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/shop/:productId/:styleId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/product/:productID', async (req, res) => {
  try {
    const { productID } = req.params;
    // redisClient.get(productID, async (err, data) => {
    //   if (err) throw err;

    //   if (data) {
    //     console.log('found on redis');
    //     res.status(200).send(data);
    //   } else {
        const response = await fetch(
          `${productLocal}/product/${productID}`
        );
        const data = await response.json();
    //     res.status(200).send(data);
    //   }
    // });
  }
  catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.get('*', (req, res) => {
  res.status(404).send();
});



app.listen(port, () => {
  console.log(`Hugo's proxy server listening on port ${port}`);
});
