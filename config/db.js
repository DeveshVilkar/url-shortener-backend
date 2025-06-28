const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Successful to mongo",process.env.MONGODB_URI)
    } catch (error) {
        console.log("Connection Failed to mongo");
        process.exit(1);
    }
}

module.exports = connectDb;