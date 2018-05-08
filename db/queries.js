var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/enrollmentz';
var db = pgp(connectionString);

const getStudents = (req, res, next) => {
  db.any('SELECT * FROM students')
    .then((data) => {
      res.status(200)
         .send({
           data: data
         });
    })
    .catch((err) => {
      return next(err);
    })
}

module.exports = {
  getStudents
};
