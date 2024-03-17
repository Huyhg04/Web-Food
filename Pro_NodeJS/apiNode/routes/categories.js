var express = require('express');
var router = express.Router();
var catgoryModel = require("../models/categoryModel");
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await catgoryModel.find();
  res.json(data);
});

module.exports = router;
