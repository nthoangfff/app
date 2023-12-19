const mongoose = require("mongoose");
require("dotenv").config();
// Load environment variables from a .env file if using dotenv
// require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://hoang1:ey9PTwveZjQzFVt2@atlascluster.or0nrph.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Exit with failure
  }
};

module.exports = { connectDB };
