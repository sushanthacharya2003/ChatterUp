import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { chatSocket } from "./sockets/chat.socket.js";

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

connectDB();
chatSocket(io);

server.listen(3000, () => console.log("Server running"));
