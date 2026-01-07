const API_BASE_URL = "http://localhost:3000/api";

let chatId = null;
const model = localStorage.getItem("model");
const title = localStorage.getItem("chatTitle");

document.getElementById("chatTitle").innerText = title;

async function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";

  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      model,
      chatId,
      title
    })
  });

  const data = await response.json();
  chatId = data.chatId;

  appendMessage("assistant", data.reply);
}

function appendMessage(role, text) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.className = role;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

