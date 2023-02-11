const { Router } = require('express');
const routes = Router();

const userRouter = require("./UserRoutes");
const sessionRoutes = require("./SessionRoutes");


routes.use("/", userRouter);
routes.use("/", sessionRoutes);


module.exports = routes;

