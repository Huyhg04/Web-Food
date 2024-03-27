var express = require('express');
var router = express.Router();
var userModel = require("../models/userModel")
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let data = await userModel.find();
  res.json(data);
});

router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;
  try {
    // Tìm người dùng trong cơ sở dữ liệu với email đã cung cấp
    const user = await userModel.findOne({ email });

    // Nếu không tìm thấy người dùng hoặc mật khẩu không khớp, trả về lỗi
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không chính xác' });
    }

    // Nếu người dùng được tìm thấy và mật khẩu khớp, trả về thông tin người dùng
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng nhập' });
  }
});

router.post('/register', async function(req, res, next) {
  const { email, password } = req.body;
  try {
    // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu hay chưa
    const existingUser = await userModel.findOne({ email });

    // Nếu người dùng đã tồn tại, trả về lỗi
    if (existingUser) {
      return res.status(400).json({ message: 'Người dùng đã tồn tại' });
    }

    // Nếu người dùng chưa tồn tại, tạo người dùng mới chỉ với email và password
    const newUser = new userModel({ email, password });
    await newUser.save();

    // Trả về thông báo thành công và thông tin người dùng
    res.status(201).json({ message: 'Người dùng đã được đăng ký thành công', user: newUser });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng ký' });
  }
});
module.exports = router;
