const express = require('express');

const { getInfo } = require('../controllers/info');

const router = express.Router();

router.get('/getInfo',getInfo);

module.exports = router