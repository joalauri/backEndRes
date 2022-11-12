const WebSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("messageToSend",(msg)=>{
      socket.broadcast.emit("newMessage",msg);
    })

    socket.on("disconnect",()=>{
      console.log("User Disconnected");
    })
  });
};

module.exports = { WebSocket };
