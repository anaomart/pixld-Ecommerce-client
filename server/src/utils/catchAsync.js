module.exports.catchAsyncError = (fn) => {
    return (req, res, next) => {
        console.log('local Middleware');
        fn(req, res, next).catch(err => next(err));
    }
}