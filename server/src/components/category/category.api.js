const router = require('express').Router();
const { uploadFile } = require('../../utils/fileUpload');
const { createCategory, getCategories, getCategory, deleteCategory, updateCategory } = require('./category.service');
// Create createCategory
router.route('/').post(uploadFile('image', 'category'), createCategory);
// get categories
router.route('/').get(getCategories);
// get a single category by id 
router.route('/:id').get(getCategory);
// delete a single category by id 
router.route('/:id').delete(deleteCategory);
// update  a single category
router.route('/:id').put(uploadFile('image', 'category'), updateCategory);




module.exports = router;