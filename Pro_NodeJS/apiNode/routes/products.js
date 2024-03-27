var express = require('express');
var router = express.Router();
var productModel = require("../models/productModel");
var mongoose = require('mongoose');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await productModel.find();
  res.json(data);
});

// Get product by category 
router.get('/cate/:id', async function(req, res, next) {
  try {
    const { id } = req.params; // Sử dụng req.params để lấy giá trị của tham số id
    let data = await productModel.find({ category_id: id });
    res.json(data);
  } catch (error) {
    console.log(error); // Change 'err' to 'error' to log the correct error variable
    res.status(500).json({ message: "Internal server error" }); // Optionally, send an error response to the client
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
    const {ma,
      name,
      image,
      price_now,
      price_sale,
      quantity,
      category_id,
      created_at,
      updated_at} = req.body;
    const _id = new mongoose.Types.ObjectId();
    // Tạo sản phẩm mới trong CSDL
    const newProduct = await productModel.create({_id,ma,
      name,
      image,
      price_now,
      price_sale,
      quantity,
      category_id,
      created_at,
      updated_at});
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
router.put('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const { name, image, price_now } = req.body;

    // Kiểm tra xem sản phẩm có tồn tại không
    let data = await productModel.findById(id);
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Thực hiện cập nhật
    await productModel.findByIdAndUpdate(id, { 
      name: name,
      image: image,
      price_now: price_now,
    });

    data = await productModel.findById(id);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// DELETE product by Id 
router.delete('/:id', async function(req, res, next) {
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

// GET price 
// Route để lọc sản phẩm theo giá
router.get('/cate/:price', (req, res) => {
    const { price } = req.params;
    let filteredProducts = [];

    // Lọc sản phẩm dựa trên giá
    switch (price) {
        case 'price1':
            filteredProducts = products.filter(product => product.price < 50000);
            break;
        case 'price2':
            filteredProducts = products.filter(product => product.price >= 50000 && product.price <= 200000);
            break;
        case 'price3':
            filteredProducts = products.filter(product => product.price > 200000 && product.price <= 400000);
            break;
        case 'price4':
            filteredProducts = products.filter(product => product.price > 400000 && product.price <= 1000000);
            break;
        case 'price5':
            filteredProducts = products.filter(product => product.price > 1000000);
            break;
        default:
            break;
    }

    res.json(filteredProducts);
});

module.exports = router;

