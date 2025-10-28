const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => res.send("Hi! you're in the new page."));

module.exports = newRouter;
