var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello world');
  // res.render("product",{"id" : 1, "name" :"Sũa vinamilk"});
  // res.json({"id" : 1, "name" :"Sũa vinamilk"});
  res.json({"id" : 1, "name" : "Milo"})

});
module.exports = router;