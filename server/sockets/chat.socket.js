import Message from "../models/message.model.js";

let users = [];

export const chatSocket = (io) => {
  io.on("connection", (socket) => {

    socket.on("join", async (username) => {
      socket.username = username;
      users.push(username);

      socket.broadcast.emit("userJoined", username);
      io.emit("users", users);

      const messages = await Message.find().limit(50);
      socket.emit("chatHistory", messages);
    });

    socket.on("typing", () => {
      socket.broadcast.emit("typing", socket.username);
    });

    socket.on("stopTyping", () => {
      socket.broadcast.emit("stopTyping");
    });

    socket.on("sendMessage", async (data) => {
      const msg = await Message.create(data);
      io.emit("newMessage", msg);
    });

    socket.on("disconnect", () => {
      users = users.filter(u => u !== socket.username);
      io.emit("userLeft", socket.username);
      io.emit("users", users);
    });
  });
};
export default chatSocket;
