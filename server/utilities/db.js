const mongoose = require('mongoose');

const URI = process.env.MONGO;
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("mongoose connected...");
    } catch (error) {
        console.log('DB refused to connect.');
        process.exit(0);
    }
}

module.exports = connectDb;