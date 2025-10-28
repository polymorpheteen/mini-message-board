const { Router } = require("express");
const { messages } = require("./indexRouter");

const newRouter = Router();

newRouter.get("/", (req, res) =>
  res.render("form", { title: "Create a New Message" })
);

newRouter.post("/", (req, res) => {
  const { name, message } = req.body;

  console.log("Received form data:", { name, message });
  messages.push({ text: message, user: name, added: new Date() });

  res.redirect("/");
});

module.exports = newRouter;
