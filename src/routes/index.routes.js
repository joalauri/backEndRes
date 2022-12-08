/* Importing the Router function from the express module and then creating a new router object. */
const { Router } = require("express");
const router = Router();
const {
  getProducts,
  getProductById,
  getRandomProduct,
  addNewProduct,
  deleteProductById,
  updateProductById
} = require("../controller/Product.Controller");

const { getHomePage } = require("../controller/Chat.Controller");
router.get("/", getHomePage);

router.get("/api/products", getProducts);
router.get("/api/products/:id", getProductById);
router.get("/api/randomProduct", getRandomProduct);
router.post("/api/products", addNewProduct);
router.delete("/api/products/:id", deleteProductById);
router.put("/api/products/:id", updateProductById);

module.exports = { router };
