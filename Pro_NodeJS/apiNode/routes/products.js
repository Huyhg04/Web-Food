var express = require('express');
var router = express.Router();
var catgoryModel = require("../models/productModel");
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await catgoryModel.find();
  res.json(data);
});

// Get product by category 
// localhost:3000/product/cate/65f30dbec00452dd5682cf4e
router.get('/cate/:id', async function(req, res, next) {
  try {
    const {id} = req.params; // Sử dụng req.params để lấy giá trị của tham số id
    let data = await catgoryModel.find({"category_id": id});
    res.json(data);
  } catch (error) {
    console.log(err);
  }
});

// Get product by Id 
router.get('/:id/detail', async function(req, res, next) {
  try {
    const {id} = req.params; // Sử dụng req.params để lấy giá trị của tham số id
    let data = await catgoryModel.findOne({"_id": id});
    res.json(data);
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;

