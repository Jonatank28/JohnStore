const { Router }  = require('express');
const multer = require('multer');
const uploadConfig = require("../config/upload");

const registerRoutes = Router(); 
const upload = multer(uploadConfig.MULTER);

const RegisterController = require('../controllers/registerController');
const registerController = new RegisterController();


registerRoutes.patch("/register-card", upload.array('photos', 5), registerController.create);



module.exports = registerRoutes;