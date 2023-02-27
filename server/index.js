const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
// const router = require('./router');

const app = express();
const port = process.env.PORT;

// MIDDLE WARE
// app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.set('views', path.join(__dirname, '../client/dist'));

// app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/dist'))); // SERVE CLIENT FILES

app.listen(port);
// eslint-disable-next-line no-console
console.log(`LISTENING AT PORT: ${port}`);