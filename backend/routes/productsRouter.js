const router = require('express').Router();
const productController = require("../controller/productController.js");

router.route("/").get(productController.allProduct);
router.route("/:id").get(productController.oneProduct).patch(productController.updateProduct).delete(productController.deleteProduct);
router.route("/add").post(productController.addProduct);




module.exports = router;