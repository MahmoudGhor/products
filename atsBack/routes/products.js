var express = require('express');
var router = express.Router();
const productController = require('../api/products');

/* GET users listing. */
router.get('/products/:num', productController.getProducts);
router.get('/product/:id', productController.getProduct);
module.exports = router;


