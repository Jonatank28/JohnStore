const { Router }  = require('express');
const userRoutes = Router(); 


const UserController = require('../controllers/userController');
const userController = new UserController();


userRoutes.post("/register", userController.create);




module.exports = userRoutes;