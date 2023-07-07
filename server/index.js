process.on('uncaughtException', (err) => console.error('uncaughtException', err))
const express = require('express')
const app = express()
require('dotenv').config({ path: './config/.env', })
const PORT = process.env.PORT || 8081;
let morgan = require('morgan');
const AppError = require('./src/utils/AppError');
const dbConnection = require('./src/database/dbConnection');
const GlobalMiddleware = require('./src/utils/globalMiddleWareError.js');
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json());
if (process.env.NODE_ENV = "DEVELOPMENT") {
    app.use(morgan('dev'));
}
// Routes 
app.use("/api/v1/user", require("./src/components/user/user.api"));
app.use("/api/v1/category", require("./src/components/category/category.api"));
app.use("/api/v1/subcategory", require("./src/components/subcategory/subcategory.api"));
app.use("/api/v1/product", require("./src/components/product/product.api"));





app.all("*", (req, res, next) => {
    let err = new AppError(`Can't Find this Route ${req.originalUrl}`, 404);
    next(err);
});

// Global Error Handler
app.use(GlobalMiddleware);


// Connection to Database
dbConnection();
app.listen(PORT, () => console.log('listening on port : ', PORT))
process.on('uncaughtException', (err) => console.log(err))