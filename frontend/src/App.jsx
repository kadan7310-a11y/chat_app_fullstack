import { useState } from "react";

 function App() {
  const [joined, setJoined] = useState(false);
  const [username, setUsername] = useState("");
  const [groupName, setGroupName] = useState("");
  const [msg, setMsg] = useState("");
  const [allChat, setAllChat] = useState({});

  const handleJoin = () => {
    if (!username.trim() || !groupName.trim()) {
      return alert("Name aur Group likho");
    }
    setJoined(true);
  };

  const handleSend = () => {
    if (!msg.trim()) return;

    const g = groupName.toLowerCase().trim();

    setAllChat((prev) => ({
      ...prev,
      [g]: [
        ...(prev[g] || []),
        {
          name: username,
          text: msg,
        },
      ],
    }));

    setMsg("");
  };

  const currentChat =
    allChat[groupName.toLowerCase().trim()] || [];

  // =========================
  // JOIN SCREEN
  // =========================
  if (!joined) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          background:
            "radial-gradient(circle at top left, #4c1d95 0%, transparent 35%), radial-gradient(circle at bottom right, #be185d 0%, transparent 30%), #09090f",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "38px",
            borderRadius: "32px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.45)",
            backdropFilter: "blur(25px)",
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "64px",
              height: "64px",
              margin: "0 auto 20px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              background:
                "linear-gradient(135deg, #8b5cf6, #ec4899)",
              boxShadow:
                "0 10px 30px rgba(139,92,246,0.35)",
            }}
          >
            💬
          </div>

          <h1
            style={{
              color: "#fff",
              textAlign: "center",
              margin: "0",
              fontSize: "32px",
              fontWeight: "800",
              letterSpacing: "-1px",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#a1a1aa",
              marginTop: "10px",
              marginBottom: "30px",
              fontSize: "14px",
            }}
          >
            Join your group and start chatting
          </p>

          {/* Username */}
          <label
            style={{
              color: "#d4d4d8",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            Username
          </label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g. Ali"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px 16px",
              marginTop: "8px",
              marginBottom: "18px",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,0.1)",
              outline: "none",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          {/* Group */}
          <label
            style={{
              color: "#d4d4d8",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            Group Name
          </label>

          <input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="e.g. B5"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px 16px",
              marginTop: "8px",
              marginBottom: "25px",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,0.1)",
              outline: "none",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          <button
            onClick={handleJoin}
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "15px",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              background:
                "linear-gradient(135deg, #8b5cf6, #ec4899)",
              boxShadow:
                "0 10px 25px rgba(139,92,246,0.3)",
            }}
          >
            Enter Chat →
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // CHAT SCREEN
  // =========================
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "15px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top left, #312e81, transparent 35%), radial-gradient(circle at bottom right, #831843, transparent 35%), #09090f",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          height: "92vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: "30px",
          background: "rgba(15,15,23,0.82)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          backdropFilter: "blur(25px)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, #8b5cf6, #ec4899)",
                fontSize: "21px",
              }}
            >
              👥
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow:
                      "0 0 10px rgba(34,197,94,0.8)",
                  }}
                />

                <b
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  {groupName}
                </b>
              </div>

              <span
                style={{
                  color: "#a1a1aa",
                  fontSize: "12px",
                }}
              >
                @{username}
              </span>
            </div>
          </div>

          <button
            onClick={() => setJoined(false)}
            style={{
              border: "1px solid rgba(239,68,68,0.25)",
              background: "rgba(239,68,68,0.12)",
              color: "#fca5a5",
              padding: "9px 14px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Leave
          </button>
        </div>

        {/* CHAT */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {currentChat.length === 0 && (
            <div
              style={{
                margin: "auto",
                textAlign: "center",
                color: "#71717a",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "10px",
                }}
              >
                👋
              </div>

              <div
                style={{
                  color: "#a1a1aa",
                  fontSize: "14px",
                }}
              >
                No messages yet
              </div>

              <div
                style={{
                  color: "#52525b",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                Start the conversation
              </div>
            </div>
          )}

          {currentChat.map((c, i) => (
            <div
              key={i}
              style={{
                alignSelf: "flex-end",
                maxWidth: "78%",
                padding: "11px 15px",
                borderRadius: "20px 20px 5px 20px",
                color: "#fff",
                background:
                  "linear-gradient(135deg, #7c3aed, #db2777)",
                boxShadow:
                  "0 7px 20px rgba(124,58,237,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#e9d5ff",
                  marginBottom: "4px",
                  fontWeight: "600",
                }}
              >
                {c.name}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.4",
                  wordBreak: "break-word",
                }}
              >
                {c.text}
              </div>
            </div>
          ))}
        </div>

        {/* MESSAGE INPUT */}
        <div
          style={{
            padding: "15px",
            display: "flex",
            gap: "10px",
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.12)",
          }}
        >
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
            placeholder="Write a message..."
            style={{
              flex: 1,
              minWidth: 0,
              padding: "13px 16px",
              borderRadius: "15px",
              border:
                "1px solid rgba(255,255,255,0.1)",
              outline: "none",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          <button
            onClick={handleSend}
            style={{
              border: "none",
              padding: "0 18px",
              borderRadius: "15px",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer",
              background:
                "linear-gradient(135deg, #8b5cf6, #ec4899)",
              boxShadow:
                "0 8px 20px rgba(139,92,246,0.25)",
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;