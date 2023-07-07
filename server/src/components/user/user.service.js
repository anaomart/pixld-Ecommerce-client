const UserModel = require('./user.model');
const slugify = require('slugify');
const AppError = require('../../utils/AppError');
const { catchAsyncError } = require('../../utils/catchAsync');
const IsValidId = require("../../utils/IsValidId");


// Create
exports.createUser = catchAsyncError(async(req, res, next) => {
    let userExist = await UserModel.findOne({ email: req.body.email })
    if (userExist) return next(new AppError("User already exists", 400))
    let User = new UserModel(req.body)
    await User.save();
    res.status(200).json({ Message: "User created successfully", User })
    console.log("User is made ")
});
//Get All
exports.getUsers = catchAsyncError(async(req, res) => {
    let Users = await UserModel.find({})
    res.status(200).json({ Message: Users })
});

// Get one by id 
exports.getUser = catchAsyncError(async(req, res, next) => {
    let { id } = req.params;
    IsValidId(id, next)
    let User = await UserModel.findById(id);
    if (!User) {
        return next(new AppError("User not found", 404))
    } else {
        res.status(200).json({ Message: User })
    }
});
//Delete
exports.deleteUser = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    IsValidId(id, next)
    let user = await UserModel.findByIdAndDelete(id);
    if (user) {
        res.status(200).json({ Message: "user deleted" });
    } else {
        next(new AppError("user not found", 404));
    }
}); // Update 
exports.updateUser = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    const User = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    if (User) {
        res.json({ Message: "User updated", User });
    } else {
        return next(new AppError("User not found", 404))
    }
});
exports.changePassword = catchAsyncError(async(req, res, next) => {
        const { id } = req.params;
        const { newPassword, oldPassword } = req.body;
        IsValidId(id, next);
        const user = await UserModel.findById(id);
        if (!user) return next(new AppError("User not found", 404));
        const samePassword = bcrypt.compare(oldPassword, user.password);
        if (!samePassword) return next(new AppError(" Wrong Old Password ", 401));

        const User = await UserModel.findByIdAndUpdate(id, { password: newPassword }, { new: true });

        if (User) {
            res.json({ Message: "Password Changed", User });
        } else {
            return next(new AppError("Something  Went  Wrong While Changing the Password", 404))
        }

    })
    // only admin 
exports.adminChangePassword = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    const User = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    if (User) {
        res.json({ Message: "Password Changed", User });
    } else {
        return next(new AppError("User not found", 404))
    }
});