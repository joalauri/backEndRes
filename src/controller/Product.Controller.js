const { ProductService } = require("../services/ProductService");
const { randomUUID } = require("crypto");

const ProductController = {};

const isFound = (result, id, res) => {
  if (!result.length) {
    res.status(404);
    res.json({ mensaje: `no se encontró ${id}` });
  } else {
    res.json(result[0]);
  }
};

ProductController.getProducts = async (req, res) => {
  const products = await ProductService.getAll();
  res.json(products);
};

ProductController.getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.getById(id);
  isFound(result, id, res);
};

ProductController.addNewProduct = async (req, res) => {
  const object = {
    ...req.body,
    productId: randomUUID(),
  };

  if (
    !object?.title ||
    !object?.price ||
    !object?.thumbnail ||
    !object?.stock
  ) {
    res.status(404);
    res.json({ mensaje: `invalid format` });
  } else {
    [result] = await ProductService.addNewProduct(object);
    // console.log(result.affectedRows);
    res.status(201);
    res.json(result);
  }
};

ProductController.deleteProductById = async (req, res) => {
  const { id } = req.params;
  const response = await ProductService.getById(id);
  if (!response.length) {
    res.status(404);
    res.json({ mensaje: `no se encontró ${id}` });
  } else {
    [result] = await ProductService.deleteById(id);
    res.json(result);
  }
};

ProductController.updateProductById = async (req, res) => {
  const { id } = req.params;
  const object = req.body;
  const response = await ProductService.getById(id);
  if (!response.length) {
    res.status(404);
    res.json({ mensaje: `no se encontró ${id}` });
  } else {
    if (!object?.title || !object?.price || !object?.thumbnail) {
      res.status(400);
      res.json({ mensaje: `invalid format` });
    } else {
      [result] = await ProductService.updateById({ ...object, productId: id });
      res.status(204);
      res.json({return: `${result}`});
    }
  }
};

ProductController.getRandomProduct = async (req, res) => {
  const products = await (await contenedor()).randomId();
  res.render("randomProduct", { products });
};
module.exports = ProductController;
