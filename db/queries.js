var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/notes';
var db = pgp(connectionString);

const getAllFruit = (req, res, next) => {
  db.any('SELECT * FROM fruits')
    .then((data) => {
      res.status(200)
         .json({
           data: data
         });
    })
    .catch((err) => {
      return next(err);
    })
}

const removeFruit = (req, res, next) => {
  console.log(req.body)
  db.any('UPDATE fruits SET quantity = ${quantity} WHERE name = ${name}', req.body)
    .then((data) => {
      res.status(200)
         .json({
           status: 'success!',
           data: data
         })
    })
    .catch((err) => {
      return next(err);
    })
}

module.exports = {
  getAllFruit,
  removeFruit
};
