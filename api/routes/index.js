const { Router } = require('express');
const routes = Router();

const userRouter = require("./UserRoutes");
const sessionRoutes = require("./SessionRoutes");
const registerRoutes = require("./RegisterRoutes");


routes.use("/", userRouter);
routes.use("/", sessionRoutes);
routes.use("/", registerRoutes);


module.exports = routes;

