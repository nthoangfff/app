const express = require("express");
const router = express.Router();

const checkAuth = require("../middlewares/check-auth");
const productController = require("../controllers/product");

router.get("/", productController.fetchProducts);
router.get("/fetch-product/:productId", productController.fetchProduct);
// router.post("/add-product", productController.addProduct);
router.post("/add-product", async (req, res) => {
    try {
      const name = req.body.product_name;
      const description = req.body.product_description;
      const type = req.body.product_type;
      const price = req.body.product_price;
      const color = req.body.product_color;
      const total_in_stock = req.body.total_in_stock;
      const image_public_id = req.body.image_public_id;
      const file = req.files.file;
  
      const product = new Product({
        name,
        description,
        type,
        images: file.name,
        image_public_id,
        price,
        color,
        reviews: [],
        total_in_stock,
        createdAt: new Date().toISOString(),
      });
  
      await product.save();
  
      return res.status(200).json({
        message: "Product added",
      });
    } catch (err) {
      res.status(500);
    }
  });
router.post("/edit-product", productController.editProduct);
router.post("/delete-product", productController.deleteProduct);

module.exports = router;
