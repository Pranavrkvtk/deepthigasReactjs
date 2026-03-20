import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to DeepthiGas!", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { text: input, from: "user" };
    setMessages((prev) => [...prev, userMsg]);

    // Simple bot reply
    let reply = "Sorry, I didn’t understand 😅";

    if (input.toLowerCase().includes("price")) {
      reply = "Our LPG cylinder price starts from ₹950.";
    } else if (input.toLowerCase().includes("book")) {
      reply = "You can book gas using the 📞 Book Now button.";
    } else if (input.toLowerCase().includes("area")) {
      reply = "We serve Thrissur, Kochi, and nearby areas.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: reply, from: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-box">

          <div className="chat-header">
            DeepthiGas Support
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}
    </>
  );
}