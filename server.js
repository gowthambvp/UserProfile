// server.js

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors');

registerRoutes = require('./routes/registerRoutes');
//homeRoutes = require('./src/app/services/home');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.use('/registerRoutes', registerRoutes);
//app.use('/authentys/home', homeRoutes);

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});