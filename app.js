const express = require('express');
const app = express();
const port = process.env.PORT || 3200;
app.use(express.static('public'));
app.get('/user', (req, res) => {
  res.send('Hello World!');
});
app.post('/', function (req, res) {
    res.send('Got a POST request');
  });
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
  });
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
  });

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});