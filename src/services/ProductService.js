const {ProductTable} = require("../database/Product.Table");

class ProductService{
    static getAll(){
        return ProductTable.SELECT();
    }

    static getById(id){
        return ProductTable.SELECT_ID(id);
    }

    static addNewProduct({productId,title,price,thumbnail,stock}){
        return ProductTable.INSERT(productId,title,price,thumbnail,stock);
    }

    static deleteById(id){
        return ProductTable.DELETE_ID(id);
    }

    static updateById({title,price,stock,thumbnail,productId}){
        return ProductTable.UPDATE(title,price,stock,thumbnail,productId);
    }
}

module.exports = {ProductService}