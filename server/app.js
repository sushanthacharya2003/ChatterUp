import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// serve frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client")));

export default app;
