const { Schema, model, Types } = require('mongoose')

const schema = Schema({
    name: {
        type: String,
        required: [true, "category name is required"],
        trim: true,
        unique: [true, "category name is not  unique"],
        minlength: [2, "category name is too short "]

    },
    slug: {
        type: String,
        lowercase: true
    },
    image: String
}, { timestamps: true });
// schema.post('init', (doc) => {
//     doc.image = `${process.env.URL}/category/` + doc.image;
// })
module.exports = model('category', schema)