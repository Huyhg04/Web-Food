var express = require('express');
var router = express.Router();
var productModel = require("../models/productModel");
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await productModel.find();
  res.json(data);
});

// Get product by category 
router.get('/cate/:id', async function(req, res, next) {
  try {
    const {id} = req.params; // Sử dụng req.params để lấy giá trị của tham số id
    let data = await productModel.find({"category_id": id});
    res.json(data);
  } catch (error) {
    console.log(err);
  }
});

// GET product by Id 
router.get('/:id/detail', async function(req, res, next) {
  try {
    const { id } = req.params;
    let data = await productModel.findOne({ "_id": id });
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//POST product
router.post('/create', async function(req, res, next) {
  try {
    const newProductData = req.body;
    // Tạo sản phẩm mới trong CSDL
    const newProduct = await productModel.create(newProductData);
    if (!newProduct) {
      return res.status(404).json({error: "Failed to create product"})
    }
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal Server Error"})
  }
})

// UPDATE product by Id 
router.put('/:id/detail', async function(req, res, next) {
  try {
    const { id } = req.params;
    const updatedData = req.body; // Giả sử dữ liệu cập nhật được gửi trong phần thân yêu cầu

    // Kiểm tra xem sản phẩm có tồn tại không
    let data = await productModel.findOne({ "_id": id });
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

   // Thực hiện cập nhật
    await productModel.updateOne({ "_id": id }, updatedData);

    // Tùy chọn, bạn có thể muốn tìm nạp và trả về dữ liệu đã cập nhật
    data = await productModel.findOne({ "_id": id });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE product by Id 
router.delete('/:id/detail', async function(req, res, next) {
  try {
    const { id } = req.params;

    // Kiểm tra xem sản phẩm tồn tại hay không
    let data = await productModel.findOne({ "_id": id });
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Thực hiện xóa sản phẩm
    await productModel.deleteOne({ "_id": id });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

