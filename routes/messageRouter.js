const { Router } = require("express");
const { messages } = require("./indexRouter");

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];
  if (!message) return res.status(404).send("Message not found");

  res.render("message", { title: "Message Details", message });
});

module.exports = messageRouter;
