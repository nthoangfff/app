const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
// const fileUpload = require("express-fileupload");

// const db = require("./src/config/db");
// const productRoutes = require("./src/routings/product");
// const userRoutes = require("./src/routings/user");
// const orderRoutes = require("./src/routings/order");


// const production = process.env.NODE_ENV === "production";

require("dotenv").config();

const app = express();



app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(fileUpload());

// database connection
// db.makeDb();

// app.use("/products", productRoutes);
// app.use("/user", userRoutes);
// app.use("/order", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

