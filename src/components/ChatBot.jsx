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
      {/* FLOATING ACTION BUTTONS ROW */}
      <div 
        className="floating-actions"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          zIndex: 1000,
          gap: "12px"
        }}
      >
   

        {/* Chat Button - Center/Right Side */}
        <div style={{ display: "flex", gap: "12px", flex: "1", justifyContent: "flex-end" }}>
          <div 
            className="chat-toggle" 
            onClick={() => setOpen(!open)}
            style={{
              backgroundColor: "#0080ff",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "40px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat with us
          </div>

          {/* Call Button - Far Right */}
          <a
            href="tel:+918078801349"
            className="call-btn"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.09-6.09 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div 
          className="chat-box"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1001,
            overflow: "hidden",
            animation: "slideUp 0.3s ease"
          }}
        >

          <div 
            className="chat-header"
            style={{
              background: "linear-gradient(135deg, #5A9E1A, #2c5e1a)",
              color: "#fff",
              padding: "16px",
              fontWeight: "bold",
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>DeepthiGas Support</span>
            <button 
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "20px",
                padding: "0",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ✕
            </button>
          </div>

          <div 
            className="chat-body"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{
                  maxWidth: "80%",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.from === "user" ? "#5A9E1A" : "#f1f3f4",
                  color: msg.from === "user" ? "#fff" : "#333",
                  fontSize: "14px"
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div 
            className="chat-input"
            style={{
              display: "flex",
              padding: "12px",
              borderTop: "1px solid #e5e7eb",
              gap: "8px"
            }}
          >
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                fontSize: "14px"
              }}
            />
            <button 
              onClick={sendMessage}
              style={{
                padding: "10px 20px",
                backgroundColor: "#5A9E1A",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Send
            </button>
          </div>

        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .floating-actions {
            padding: 0 12px !important;
            gap: 8px !important;
          }
          
          .safety-btn,
          .chat-toggle,
          .call-btn {
            padding: 10px 16px !important;
            font-size: 12px !important;
          }
          
          .chat-box {
            width: calc(100% - 40px) !important;
            right: 20px !important;
            left: 20px !important;
            bottom: 100px !important;
          }
        }
        
        @media (max-width: 480px) {
          .safety-btn span,
          .chat-toggle span,
          .call-btn span {
            display: none;
          }
          
          .safety-btn,
          .chat-toggle,
          .call-btn {
            padding: 12px !important;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}