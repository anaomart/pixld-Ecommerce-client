const { uploadFile } = require('../../utils/fileUpload');
const { createProduct, getProduct, getAllProducts, deleteProduct, updateProduct } = require('./product.service');

const router = require('express').Router();
let fields = [{ name: 'imageCover', maxCount: 1 }, { name: 'images', maxCount: 8 }]

// create product
router.post('/', uploadFile(fields, 'product', 'mix'), createProduct)
    // get product 
router.get("/:id", getProduct);
// get all Prodcuts 
router.get("/", getAllProducts);
// delete product 
router.delete("/:id", deleteProduct);
//  update product 
router.put('/:id', uploadFile(fields, 'product', 'mix'), updateProduct);

module.exports = router