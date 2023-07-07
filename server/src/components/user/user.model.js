const { Schema, model, Types } = require('mongoose')
const bcrypt = require('bcrypt')
const schema = Schema({
    name: {
        type: String,
        required: [true, "user name required"],
        trim: true,
        minlength: [3, "too short  name"],
        unique: false

    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, "email has to be  unique"],
        validate: {
            validator: function(value) {
                // Regular expression for email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email address',
        },
    },
    phone: {
        type: String,
        required: [true, "user phone required"],
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'seller'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        minlength: [6, "password must be at least 6 characters"],
        required: [true, " Password required"],

    },
    profileImage: String
}, { timestamps: true });
schema.pre("save", async function(next) {
    const user = this
    user.password = await bcrypt.hash(this.password, Number(process.env.ROUND));
})
schema.pre("findOneAndUpdate", async function(next) {
    const user = this
    if (user._update.password)
        user._update.password = await bcrypt.hash(this._update.password, Number(process.env.ROUND));
})
module.exports = model('user', schema)