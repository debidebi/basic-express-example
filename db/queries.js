var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/notes';
var db = pgp(connectionString);

const getUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
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

module.exports = {
  getUsers
};
