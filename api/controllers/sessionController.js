const db = require('../config/db');

class SessionController {
    login(req, response) {
        const { email, password } = req.body;

        db.query("SELECT * FROM users WHERE email = ? and password = ?", [email, password], (error, result) => {
            if (error) {
                console.log(error);
            } else if(result.length === 0){
                response.status(409).json({message: "Email e/ou senha incorretos"})
            } else{
                response.json(result)
            }  
        })
    }
}



module.exports = SessionController;