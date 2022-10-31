const redis = require('redis')
const express = require('express');
const router = express.Router();
const config = require('../util/config')
let visits = 0
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...config,
    visits
  });
});

module.exports = router;
