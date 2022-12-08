const {db} = require("./dbconfig")

class MessageTable {

  static async INSERT(message){
    return await db.query("INSERT INTO messages(message) VALUES(?)" , [message]);
  }

  static async SELECT(){
    const [messages] = await db.query("SELECT * FROM messages");
    return messages
  }
}

module.exports = {MessageTable}