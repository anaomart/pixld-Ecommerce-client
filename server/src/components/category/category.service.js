const CategoryModel = require('./category.model');
const slugify = require('slugify');
const AppError = require('../../utils/AppError');
const { catchAsyncError } = require('../../utils/catchAsync');
let cloudinary = require('cloudinary');
const IsValidId = require('../../utils/IsValidId');

cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret
});
exports.createCategory = catchAsyncError(async(req, res, next) => {
    console.log(req.body)
    if (!req.body.name & !req.body.image) return next(new AppError("Please Enter Name and Image", 406));

    cloudinary.v2.uploader.upload(req.file.path, async(err, result) => {
        const categoryExist = CategoryModel.find({ name: req.body.name })
        if (categoryExist) return next(new AppError("Category already exists", 406))
        req.body.slug = slugify(req.body.name);
        req.body.image = result.secure_url;
        let category = new CategoryModel(req.body)
        await category.save();
        res.status(200).json({ message: "Category created successfully", category })
        console.log("Category is made ")
    })
});
exports.getCategories = catchAsyncError(async(req, res) => {
    console.log("Categories")
    let categories = await CategoryModel.find({})
    res.status(200).json(categories)
});

exports.getCategory = catchAsyncError(async(req, res, next) => {
    let { id } = req.params;
    IsValidId(id, next)
    let category = await CategoryModel.findById(id);
    if (!category) {
        return next(new AppError("Category not found", 404))
    } else {
        res.status(200).json(category)
    }
});

exports.deleteCategory = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    IsValidId(id, next)

    let document = await CategoryModel.findByIdAndDelete(id);
    if (document) {
        res.status(200).json({ message: "document deleted" });
    } else {
        console.log("can't find it ");
        next(new AppError("document not found", 404));
    }
});

exports.updateCategory = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    console.log("update route")

    IsValidId(id, next)

    if (req.body.name) {
        req.body.slug = slugify(req.body.name)
    };
    console.log("file path : ", req.file.path)
    if (req.file.path) {
        await cloudinary.v2.uploader.upload(req.file.path, async(err, result) => {
            console.log("image updated")
            console.log(result.secure_url)
            req.body.image = result.secure_url
            console.log("one", req.body.image)
        })

    }
    console.log("two", req.body.image)

    const category = await CategoryModel.findByIdAndUpdate(id, req.body, { new: true })
    if (category) {
        res.json({ message: "Category updated", category });
    } else {
        return next(new AppError("Category not found", 404))
    }

});
// getSubcategories to do