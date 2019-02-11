const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

// app.get('/:city/:street', (request, response) => {
//   const city = request.params.city;
//   const street = request.params.street;
//   response.send('Hello ' + city[0].toUpperCase() + city.slice(1) + '<br>' + street);
// })

app.set('port', process.env.PORT || 3002);
module.exports = app;
