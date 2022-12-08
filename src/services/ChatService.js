const {MessageTable} = require('../database/Messages.Table')

class ChatService{
    static getAll(){
        return MessageTable.SELECT();
    }

    static addNewMessage(message){
        return MessageTable.INSERT(message);
    }
}

module.exports = {ChatService}