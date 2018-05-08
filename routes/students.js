var express = require('express');
var router = express.Router();
let db = require('../db/queries')

router.get('/', db.getStudents);

module.exports = router;
