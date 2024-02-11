import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useState, useEffect } from "react";

function Meeting() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("");
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  // change with router-dom
  const urlParams = new URLSearchParams(window.location.search);
  const roomId = urlParams.get("roomId");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
    setWebSocket(socket);

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      setChat((prevChat) => prevChat + event.data);
    };

    return () => {
      // socket.close();
    };
  }, []);

  function sendMessage() {
    const wsMessage = {
      type: "message",
      payload: { message },
    };
    webSocket?.send(JSON.stringify(wsMessage));
    setMessage("");
  }

  function joinRoom() {
    const wsJoinMessage = {
      type: "join",
      payload: { roomId },
    };
    webSocket?.send(JSON.stringify(wsJoinMessage));
  }

  return (
    <>
      <Input name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button variant="contained" onClick={sendMessage}>
        Send
      </Button>
      <Button onClick={joinRoom}>Join Room</Button>
      <p>{chat}</p>
    </>
  );
}

export default Meeting;
