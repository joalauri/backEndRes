const socket = io();

const messageForm = document.getElementById("newMessage");
const messages = document.getElementById("messages");
let height = messages.clientHeight;

messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    if (!message.length) return;

    socket.emit("messageToSend", message);
    messages.insertAdjacentHTML("beforeend",messageSent(message));
    scrollDown();
    messageForm.reset();
});

socket.on("newMessage", (msg) => {
    messages.insertAdjacentHTML("beforeend",messageRecieve(msg));
    scrollDown();
});

const messageSent = (msg) => {
  return `
    <div class="messageContainer sent">
        <div class="messageSent" id="">${msg}</div>
        <figure>
            <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png" alt="">
            <span>Joaquin</span>
        </figure>
    </div>
    `;
};
const messageRecieve = (msg) => {
  return `
    <div class="messageContainer recieved">
        <div class="messageRecieved" id="">${msg}</div>
        <figure>
            <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png" alt="">
            <span>Joaquin</span>
        </figure>
    </div>
    `;
};

const scrollDown = () =>{
    height+= 200;
    
    messages.scrollTo({
        top:height,
        behavior:"smooth"
    });
}
function submitOnEnter(event){
    if(event.which === 13){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault();
    }
}
document.getElementById("message").addEventListener("keypress", submitOnEnter);