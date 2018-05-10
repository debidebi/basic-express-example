var express = require('express');
var router = express.Router();
let db = require('../db/queries')

router.get('/', db.getUsers);

module.exports = router;
