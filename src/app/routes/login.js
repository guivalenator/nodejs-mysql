//route to show the login page
const dbConnection = require('../../config/dbConnection');
// arrow funtion. app is parameter

module.exports = app => {
    const connection = dbConnection();
    app.get('/',(req,res) => {
        connection.query('SELECT * FROM usuarios', (err, result) =>{
            //console.log(result);
            res.render('../views/login',{
                usuario:result
            });
        });
        app.post('/login', (req, res) =>{
            //console.log(req.body);
            const {usuario, contrasena, edad } = req.body;
            connection.query("INSERT INTO usuarios SET?",
            {usuario: usuario,  contrasena: contrasena, edad: edad
            }, (err, result) => {
                res.redirect('/')
            });
    
        });
    });

    
}