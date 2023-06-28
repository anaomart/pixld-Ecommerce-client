const subCategoryModel = require("./subcategory.model");
const slugify = require("slugify");
const { catchAsyncError } = require("../../utils/catchAsync");
const IsValidId = require("../../utils/IsValidId");
const AppError = require("../../utils/AppError");
// Create subcategory 
exports.createSubCategory = catchAsyncError(async(req, res, next) => {
    console.log("CreateSubCategory")
    const { name, category } = req.body;
    IsValidId(category, next)
    if (!name || !category) return next(new AppError('name and category required', 406));
    let subCategory = new subCategoryModel({ name, slug: slugify(name), category });
    await subCategory.save();
    res.status(200).json({ Message: subCategory });

});

// get all sub subcategories
exports.getSubCategories = catchAsyncError(async(req, res) => {
    const subCategories = await subCategoryModel.find({})
    res.status(200).json({ Message: subCategories })
});

// get specific subcategory
exports.getSubCategory = catchAsyncError(async(req, res, next) => {
        const { id } = req.params;
        IsValidId(id, next)
        const subCategory = await subCategoryModel.findById(id);
        console.log({ subCategory });
        if (subCategory) {
            console.log({ subCategory });

            return res.status(200).json({ Message: subCategory });

        } else {
            return next(new AppError('No subCategory found', 404))
        }

    })
    // delete specific subCategory
exports.deleteSubCategory = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    IsValidId(id, next)
    let subCategory = await subCategoryModel.findByIdAndDelete(id);
    if (subCategory) {
        res.status(200).json({ Message: "subCategory deleted" });
    } else {
        next(new AppError("subCategory not found", 404));
    }
});
// update SubCategory
exports.updateSubCategory = catchAsyncError(async(req, res, next) => {
    const { name, category } = req.body;
    if (!name && !category) return next(new AppError('name or category required', 406));
    const { id } = req.params;
    IsValidId(id, next)
    let current_SubCategory = await subCategoryModel.findById(id);

    if (current_SubCategory) {
        await subCategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name), category })
        res.status(200).json({ Message: "subCategory updated" });
    } else {
        return next(new AppError("subCategory not found", 404));
    }
})