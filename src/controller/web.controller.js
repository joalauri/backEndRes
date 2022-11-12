
const { test } = require('../class.creation');


/**
 * The function 'contenedor' is an asynchronous function that returns a promise that resolves to the
 * value returned by the function 'test'.
 * @returns the value of the variable nuevoContenedor.
 */
const contenedor = async () => {
  const nuevoContenedor = await test();
  return nuevoContenedor;
};

const webController = {};


//It gets all the products from the database.
webController.getHomePage = async (req, res) => {
  res.render('index');
};
webController.getProductsController = async (req, res) => {
  res.send(JSON.stringify(await (await contenedor()).getAll(), null, 2));
};
//It gets an especific product from the database.
webController.getRandomProductController = async (req, res) => {
  res.send(JSON.stringify(await (await contenedor()).randomId(), null, 2));
};

module.exports = webController

