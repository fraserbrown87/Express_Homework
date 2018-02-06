const express = require('express')
const router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
  res.json({data: "Home"})
});

module.exports = router;
