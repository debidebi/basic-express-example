var express = require('express');
var router = express.Router();
let db = require('../db/queries')

router.get('/', db.getAllFruit);
router.post('/remove', db.removeFruit);

module.exports = router;
