const UserModel = require('./user.model');
const AppError = require('../../utils/AppError');
const { catchAsyncError } = require('../../utils/catchAsync');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
exports.signUp = catchAsyncError(async(req, res, next) => {
    const userExist = await UserModel.findOne({ email: req.body.email })
    if (userExist) return next(new AppError("User already exists", 400))
    const User = new UserModel(req.body)
    await User.save();
    res.status(200).json({ Message: "User created successfully", User })
    console.log("User is made ")
});
exports.signIn = catchAsyncError(async(req, res, next) => {
    if (!req.body.email || !req.body.password) return next(new AppError("please complete Information ", 400));
    const user = await UserModel.findOne({ email: req.body.email })
    console.log(user)
    if (!user) return next(new AppError("incorrect email or password", 400))
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) return next(new AppError("incorrect email or password", 400))

    let token = jwt.sign({ name: user.name, userId: user._id, role: user.role },
        process.env.JWT_SECRET, { expiresIn: '1d' })
    res.json({ Message: "Logged in  successfully", token: token })
});
exports.protectedRoutes = catchAsyncError(async(req, res, next) => {

    let token = req.headers.token;
    if (!token) return next(new AppError("incorrect token", 401));

    let decoded = await jwt.verify(token, process.env.JWT_SECRET)

    let user = await UserModel.findById(decoded.userId);
    if (!user) return next(new AppError("user not found", 401));
    if (decoded)
        req.user = user;


});

exports.allowedTo = (...roles) => {
    return catchAsyncError((req, res, next) => {
        if (!req.user) return next(new AppError("Login First", 401));
        if (!roles.includes(req.user.role))
            return next(new AppError("You are not allowed to access this role", 401));
    });
}