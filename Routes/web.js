const { Router } = require("kauri");

const web = new Router();
module.exports.default = web;

web.get("/test", async ctx => {
  ctx.body = "Welcome to Kauri";
});