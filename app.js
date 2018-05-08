const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const port = 8000;

const students = require('./routes/students');

app.use(logger('dev'));

app.use('/students', students);

app.get('/reed', (req, res) => {
  res.send('Is it this one?');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('*', (req, res) => {
  res.status(404).send(`Error`);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
