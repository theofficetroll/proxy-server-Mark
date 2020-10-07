// express + routes
const app = require('./app');

// port 4000 for the proxy server
const port = 4000;

app.listen(port, () => {
  console.log(`Hugo's proxy server listening on ${port}`);
});
