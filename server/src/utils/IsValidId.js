const { isValidObjectId } = require("mongoose")
const AppError = require("./AppError")

function IsValidId(id, next) {
    if (!isValidObjectId(id)) {
        console.log("Invalid id: " + id)
        return next(new AppError('Invalid Id ', 400))
    }
}


module.exports = IsValidId