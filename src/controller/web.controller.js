
const { test } = require('../class.creation');


const contenedor = async () => {
  const nuevoContenedor = await test();
  return nuevoContenedor;
};

const webController = {};


//It gets all the products from the database.
webController.getHomePage = async (req, res) => {
  const products = (await (await contenedor()).getAll());
  res.render('index',{products});
};
webController.getProductsController = async (req, res) => {
  res.send(JSON.stringify(await (await contenedor()).getAll(), null, 2));
};
//It gets an especific product from the database.
webController.getRandomProductController = async (req, res) => {
  const products = (await (await contenedor()).randomId());
  res.render('randomProduct',{products});
};
webController.getChatController =  (req, res) =>{
res.render("chat")
}
webController.getCreateController = async (req, res) => {
  res.render('createObject')
}

module.exports = webController

