const {db} = require("./dbconfig")

class ProductTable {

  static async INSERT(productId,title,price,thumbnail,stock){
    return await db.query("INSERT INTO products(productId,title,price,stock,thumbnail) VALUES(?,?,?,?,?)" , [productId,title,price,stock,thumbnail]);
  }

  static async SELECT(){
    const [products] = await db.query("SELECT * FROM products");
    return products
  }
  static async SELECT_ID(id){
    const [product] = await db.query("SELECT * FROM products WHERE productId = ?", [id]);
    return product
  }

  static async DELETE_ID(id){
    return await db.query("DELETE FROM products WHERE productId = ?", [id]);
  }

  static async UPDATE(title,price,stock,thumbnail,productId){
    return await db.query("UPDATE products SET title = IFNULL(?, title) , price = IFNULL(?, price) , stock = IFNULL(?, stock) , thumbnail = IFNULL(?, thumbnail) WHERE productId = ?", [title,price,stock,thumbnail,productId]);
  }
}

module.exports = {ProductTable}