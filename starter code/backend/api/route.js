const express = require("express");
const router = express.Router();

const { handleChat } = require("./controller");
const Chat = require("./model");

router.post("/chat", handleChat);

// Sidebar chat list
router.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find({}, "title").sort({ updatedAt: -1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Load full chat
router.get("/chat/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
