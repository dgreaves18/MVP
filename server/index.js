const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Players = require('./db.js');

const app = express();
const port = process.env.PORT;

// MIDDLE WARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist'))); // SERVE CLIENT FILES

app.post('/player/data', (req, res) => {
  // console.log(req);
  // console.log(req.params);
  console.log(req.body);
  Players.find({full_name: `${req.body.full_name}`})
    .then((data) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Error finding player', err);
      res.sendStatus(500);
    });
});

app.post('/player', (req, res) => {
  Players.create(req.body)
    .then(() => {
      res.send('Success');
    })
    .catch((err) => {
      res.send('Error', err);
    });
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`LISTENING AT PORT: ${port}`);