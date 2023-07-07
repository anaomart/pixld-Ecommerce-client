const { Schema, model, Types } = require("mongoose");

const schema = Schema({
    name: {
        type: String,
        required: [true, "product name required"],
        trim: true,
        unique: [true, "product name unique"],
        minlength: [2, "too short category name"],
    },
    productFeatures: String,
    instruction: String,
    material: String,
    slug: {
        type: String,
        lowercase: true,
    },
    description: {
        type: String,
        trim: true,
        minlength: [2, "too short product name"],
    },
    quantity: {
        type: Number,
        default: 0,
        required: [true, "  product quantity required"],
    },
    price: {
        type: Number,
        required: [true, " product price required"],
    },
    priceAfterDiscount: {
        type: Number,
    },
    color: [String],
    imageCover: {
        type: String,
        required: [true, "  imageCover required"],
    },
    images: [String],
    sold: {
        type: Number,
        default: 0,
    },
    ratingCount: {
        type: String,
    },
    category: {
        type: Types.ObjectId,
        ref: "category",
    },
    subcategory: {
        type: Types.ObjectId,
        ref: "subcategory",
    },

    averageRating: {
        type: Number,
        min: [1, "ratingAverage must be between 1 and 5 "],
        max: [5, "ratingAverage must be between 1 and 5 "]
    }
}, { timestamps: true });

module.exports = model("product", schema);