const socket = io("http://localhost:3000");

let username = prompt("Enter your name");
document.getElementById("welcome").innerText = `welcome ${username}`;

socket.emit("join", username);

const msgBox = document.getElementById("messages");
const input = document.getElementById("messageInput");
const typingDiv = document.getElementById("typing");

input.addEventListener("input", () => {
  socket.emit("typing");
  setTimeout(() => socket.emit("stopTyping"), 1000);
});

document.getElementById("sendBtn").onclick = () => {
  if (!input.value) return;

  socket.emit("sendMessage", {
    username,
    text: input.value,
    avatar: "🙂",
    time: new Date().toLocaleTimeString()
  });

  input.value = "";
};

socket.on("userJoined", (name) => {
  const div = document.createElement("div");
  div.innerText = `${name} has joined the chat`;
  msgBox.appendChild(div);
});

socket.on("newMessage", (msg) => {
  addMessage(msg);
});

socket.on("chatHistory", (msgs) => {
  msgs.forEach(addMessage);
});

socket.on("typing", (name) => {
  typingDiv.innerText = `${name} typing...`;
});

socket.on("stopTyping", () => {
  typingDiv.innerText = "";
});

socket.on("users", (users) => {
  document.getElementById("userCount").innerText = users.length;
  document.getElementById("usersList").innerHTML =
    users.map(u => `<li><span class="green-dot">●</span> ${u}</li>`).join("");
});

socket.on("userLeft", (name) =>{
    const div = document.createElement("div");
    div.innerText = `${name} has left the chat`;
    msgBox.appendChild(div);
} )

function addMessage(msg) {
  const div = document.createElement("div");
  div.className = "message";
  div.innerHTML = `
    <strong>${msg.username}</strong>
    <span>${msg.time}</span>
    <p>${msg.text}</p>
  `;
  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;
}
