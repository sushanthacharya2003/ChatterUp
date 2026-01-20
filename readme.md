---
# 💬 ChatterUp – Real-Time Chat Application

ChatterUp is a real-time web-based chat application that enables multiple users to communicate instantly in a shared chat room. It is built using Node.js, Express.js, Socket.IO, and MongoDB, following a modular MVC architecture and ES6 standards.

---

## 🎯 Project Objective

The objective of ChatterUp is to create an interactive and user-friendly real-time chat system that supports:
- Live message broadcasting
- User join and leave notifications
- Typing indicators
- Online users panel
- Chat history persistence

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- Socket.IO
- MongoDB (Atlas)
- Mongoose

**Frontend**
- HTML
- CSS
- Vanilla JavaScript

---

## 🧩 Features Implemented

- Real-time bidirectional communication using Socket.IO
- User onboarding with name prompt and welcome message
- Live typing indicators
- Notification when users join or leave the chat
- Online users list with active status indicator
- Persistent chat history stored in MongoDB
- Message metadata (username, timestamp, avatar)
- Modular MVC-based backend structure

---

## 📁 Project Structure

```

chatter-up/
│
├── server/
│   ├── config/        # Database configuration
│   ├── models/        # Mongoose schemas
│   ├── controllers/   # Business logic
│   ├── sockets/       # Socket.IO events
│   ├── app.js
│   └── server.js
│
├── client/
│   ├── index.html
│   ├── css/style.css
│   └── js/chat.js
│
├── package.json
└── README.md

```

---

## 🔁 Application Flow

1. User opens the application
2. User enters their name (one-time onboarding)
3. Socket connection is established
4. Chat history is fetched from MongoDB
5. User sends/receives messages in real time
6. Typing indicators and notifications are broadcasted
7. Messages are stored securely in the database

---

## 🧠 System Architecture Diagram

```

┌────────────┐
│   Client   │
│ (Browser)  │
└─────┬──────┘
│  Socket.IO Events
▼
┌───────────────┐
│  Express.js   │
│  + Socket.IO  │
└─────┬─────────┘
│ Mongoose
▼
┌───────────────┐
│   MongoDB     │
│ (Chat Data)   │
└───────────────┘

````

---

## 🧪 Testing Strategy

### ✅ Manual Testing

| Feature | Test Case | Result |
|------|---------|--------|
| User Join | New user enters name | Pass |
| Welcome Message | Header updates with username | Pass |
| Message Send | Message broadcasted to all users | Pass |
| Typing Indicator | Displayed while typing | Pass |
| User Count | Updates on join/leave | Pass |
| Chat History | Loaded for new users | Pass |
| Disconnect | User removed from online list | Pass |

### ✅ Edge Case Testing
- Empty message submission blocked
- Page refresh does not crash server
- Multiple users joining simultaneously handled correctly

---

## 🚀 How to Run the Project

1. Clone the repository
```bash
git clone <repo-url>
````

2. Install dependencies

```bash
npm install
```

3. Add MongoDB URL in environment variables

```env
MONGO_URL=your_mongodb_connection_string
```

4. Start the server

```bash
npm start
```

5. Open in browser

```
http://localhost:3000
```

---

## 💡 Innovation & Optimization

* Event-driven architecture using Socket.IO
* Optimized typing indicator to prevent event flooding
* Modular codebase for scalability and maintainability

---

## 📌 Conclusion

ChatterUp successfully demonstrates the implementation of a real-time chat application using modern web technologies. The project emphasizes clean architecture, real-time communication, and an engaging user experience.

---

```

---
