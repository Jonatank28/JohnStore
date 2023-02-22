const { Router }  = require('express');
const multer = require('multer');
const uploadConfig = require("../config/upload");

const registerRoutes = Router(); 
const upload = multer(uploadConfig.MULTER);

const RegisterController = require('../controllers/registerController');
const registerController = new RegisterController();


registerRoutes.post("/register-card", registerController.create);
registerRoutes.patch("/register-card", upload.array('photos'), registerController.photo);

module.exports = registerRoutes;