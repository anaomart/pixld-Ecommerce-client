const mongoose = require('mongoose')

const connectionString = process.env.connectionString

function dbConnection() {
    mongoose.connect(connectionString).then(() => {
        console.log('Database Connected...')
    }).catch((err) => console.log(err))

}
module.exports = dbConnection