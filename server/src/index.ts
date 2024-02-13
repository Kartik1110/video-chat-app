import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import http from "http";
import { WebSocketServer } from "ws";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const wss = new WebSocketServer({ server });

const users: {
  [key: string]: {
    room: string;
    ws: any;
  };
} = {};

let counter = 0;

wss.on("connection", async (ws, req) => {
  console.log("Connected ++++");
  const wsId = counter++;

  ws.on("message", (message) => {
    // ws.send(`Hello, you sent -> ${message}`);

    const data = JSON.parse(message.toString());

    if (data.type === "join") {
      console.log("data>>> ", data);
      users[wsId] = {
        room: data.payload.roomId,
        ws,
      };
      ws.send(`User joined>> , ${users[wsId]?.room}`);
    }

    if (data.type === "message") {
      const roomId = users[wsId].room;
      const message = data.payload.message;
      console.log("data>>> message", data);

      Object.keys(users).forEach((wsId) => {
        if (users[wsId].room === roomId) {
          users[wsId].ws.send(
            JSON.stringify({
              type: "message",
              payload: {
                message,
              },
            })
          );
        }
      });
    }
  });
});

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

const mainRouter: Router = Router();
mainRouter.use("/", authRouter);

app.use("/api", mainRouter);

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
