const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected ${conn}`.inverse.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = {
    connectDB,
}
