const { default: slugify } = require("slugify");
const ApiFeatures = require("../../utils/ApiFeatures");
const AppError = require("../../utils/AppError");
const { catchAsyncError } = require("../../utils/catchAsync");
const ProductModel = require("./product.model");
const IsValidId = require("../../utils/IsValidId");
let cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret
});
//create Product
exports.createProduct = catchAsyncError(async(req, res, next) => {
    const images = [];
    if (!req.body.name || !req.body.category) {
        return next(new AppError("Please complete all required fields.", 406));
    }
    req.body.slug = slugify(req.body.name);

    try {
        // Upload image cover
        const coverUploadResult = await cloudinary.uploader.upload(
            req.files.imageCover[0].path
        );
        req.body.imageCover = coverUploadResult.secure_url;

        // Upload additional images
        const imageUploadPromises = req.files.images.map((image) =>
            cloudinary.uploader.upload(image.path)
        );
        const imageUploadResults = await Promise.all(imageUploadPromises);
        imageUploadResults.forEach((result) => {
            images.push(result.secure_url);
        });
        req.body.images = images;

        const product = await ProductModel.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        next(error);
    }
});
// get Product

exports.getProduct = catchAsyncError(async(req, res, next) => {
    let { id } = req.params;
    IsValidId(id, next)
    let Product = await ProductModel.findById(id);
    if (Product) {
        res.status(200).json(Product);

    } else {
        next(new AppError("Product not found", 404))

    }

});
// get all prodcuts 
exports.getAllProducts = catchAsyncError(async(req, res, next) => {
    console.log(req.query)
    let apiFeatures = new ApiFeatures(ProductModel.find(), req.query).paginate(2).sort().fields().search().filter();
    let Products = await apiFeatures.mongooseQuery;
    res.status(200).json({ page: apiFeatures.page, Products });
});
// delete Product
exports.deleteProduct = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    IsValidId(id, next)
    let subCategory = await ProductModel.findByIdAndDelete(id);
    if (subCategory) {
        res.status(200).json({ Message: "Product deleted" });
    } else {
        next(new AppError("Product not found", 404));
    }
});
// update product

exports.updateProduct = catchAsyncError(async(req, res, next) => {
    const images = []
    const { id } = req.params;
    IsValidId(id, next)
    if (req.body.imageCover) {
        // Upload image cover
        const coverUploadResult = await cloudinary.uploader.upload(
            req.files.imageCover[0].path
        );
        req.body.imageCover = coverUploadResult.secure_url;
    }
    if (req.body.images) {
        const imageUploadPromises = req.files.images.map((image) =>
            cloudinary.uploader.upload(image.path)
        );
        const imageUploadResults = await Promise.all(imageUploadPromises);
        imageUploadResults.forEach((result) => {
            images.push(result.secure_url);
        });
        req.body.images = images;

    }
    req.body.slug && (req.body.slug = req.body.name);
    let current_Product = await ProductModel.findByIdAndUpdate(id, req.body);
    if (current_Product)
        res.status(200).json({ message: "Product updated" })
    else
        next(new AppError("Product not found", 404));

});