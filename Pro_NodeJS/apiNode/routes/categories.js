var express = require('express');
var router = express.Router();
var catgoryModel = require("../models/categoryModel");
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await catgoryModel.find();
  res.json(data);
});
// Thêm category
// localhost:3000/
router.post('/', async function(req, res, next) {
  try {
      const {name, items } = req.body;
      const data = await catgoryModel.create({ name, items });
      res.json({ status: 200, message: "Thêm thành công" });
  } catch (err) {
      res.json({ status: "error", message: "Thêm thất bại" });
  }
});


module.exports = router;
