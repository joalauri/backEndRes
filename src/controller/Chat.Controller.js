
const {ProductService} = require("../services/ProductService")

const ChatController = {};

ChatController.getHomePage = async (req, res) => {
  res.render('index');
};


module.exports = ChatController

