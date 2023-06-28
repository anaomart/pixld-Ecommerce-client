const multer = require('multer');
const AppError = require('./AppError');
exports.uploadFile = (fieldName, folderName, quantity = 'single', type = 'image') => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, `uploads/${folderName}`);
        },
        filename: function(req, file, cb) {
            console.log("filename function:", file.originalname)
            const unique = Date.now() + '_' + Math.round(Math.random() * 1E9);
            cb(null, unique + '-' + file.originalname);
        }
    })

    function fileFilter(req, file, cb) {
        if (file.mimetype.startsWith(type)) cb(null, true)
        else cb(new AppError(type + ' Only', 400), false);
    }
    const upload = multer({ storage, fileFilter })
    return quantity == 'single' ? upload.single(fieldName) : upload.fields(fieldName)
};