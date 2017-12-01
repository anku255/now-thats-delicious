const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('layout');
});

module.exports = router;
