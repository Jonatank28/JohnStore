const db = require('../config/db');

class RegisterController {
    create(req, res) {
        const { title, description, previous_value, current_value } = req.body;
        db.query('INSERT INTO product (title, description, previous_value, current_value) VALUES (?, ?, ?, ?)', [title, description, previous_value, current_value],
        (err, result) => {
            if (err){
                console.log(err);
            } else{
                res.json("Cadastrado com sucesso");
            }
        })
    }
    photo(req, res){
        db.query("SELECT MAX(id) AS id FROM product", (err, result) => {
            if (err){
                console.log(err);
            } else{
                const id = result[0].id
                const photos = req.files.map(file => file.filename);
                const values = photos.map(photo => [id, photo]);
                db.query("INSERT INTO product_photo (id, photo) VALUES ? ", [values], (err, result) => {
                    if (err){
                        console.log(err);
                    } else{
                        res.json("Cadastrado com sucesso");
                    }
                })
            }
        })
    }
}

module.exports = RegisterController;