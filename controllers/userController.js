const { create, findOne } = require('../services/user');
const userToken =  require('../middleware/userToken')
const bcrypt = require('bcrypt');

const crearUsuario = async (req, res) => {
    const userData = req.body;
    try {
        const user = await create(userData);
        res.status(201).json({
            message: "El usuario ha sido creado exitosamente",
            user: user
        })
    } catch (error) {
        res.status(401).json({
            message: "Ha ocurrido un error al crear el usuario",
            error: error
        })
    }
}

const buscarUsuario = async (req, res) => {
    const {email} = req.body;
    try {
        const user = await findOne(email);
        if (!user) {
            res.status(400).json({
                message: "No existe un usuario con el email enviado"
            });
        } else {
            res.status(200).json({
                user: user
            })
        }
        res.status(200).json({
            user: user
        })
    } catch (error) {
        
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await findOne(email);
        if (!user) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        } 

        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({
                message: "Contraseña incorrecta"
            })
        }

        const token = await userToken(user);
        
        return res.status(200).json({
            message: 'Login exitoso',
            user,
            token
        });  

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: error
        });
    }
}

module.exports = {
    crearUsuario,
    buscarUsuario,
    loginUser
}