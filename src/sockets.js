const {ChatService} = require('./services/ChatService')

const WebSocket = (io) => {
  io.on("connection",async (socket) => {
    console.log("New user connected");

    const messages = await ChatService.getAll();

    socket.emit("loadMessages",messages);
    
    socket.on("messageToSend",async (msg)=>{
      await ChatService.addNewMessage(msg);
      socket.broadcast.emit("newMessage",msg);
    })

    socket.on("disconnect",()=>{
      console.log("User Disconnected");
    })
  });
};

module.exports = { WebSocket };
