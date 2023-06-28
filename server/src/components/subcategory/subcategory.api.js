const { createSubCategory, getSubCategories, getSubCategory, deleteSubCategory, updateSubCategory } = require("./subcategory.service");

const router = require('express').Router();
// Create subcategory 
router.post('/', createSubCategory);
// get all sub subcategories
router.get('/', getSubCategories);
// get specific subCategory
router.get('/:id', getSubCategory);
// delete specific subCategory
router.delete('/:id', deleteSubCategory);
// update specific subCategory
router.put('/:id', updateSubCategory);





module.exports = router