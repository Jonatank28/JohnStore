const db = require('../config/db');

class UserController {
    create(req, res) {
        const { name, email, password} = req.body;

        db.query("SELECT * FROM users WHERE email = ?", [email], (error, result) => {
            if (error) {
                res.json(error);
            } else if (result.length > 0){
                res.status(409).json({message: "Email já cadastrado"})
            } else {
                db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password], (err, result) =>{
                    if(error){
                        return res.json(error);
                    } else {
                        res.json({message: "Cadastrado com sucesso"})
                    }
                })
            }
        })
    }
}

module.exports = UserController;