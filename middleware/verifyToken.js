const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            message: "No se ha enviado el token de autenticación"
        });
    } 
    jwt.verify(token, process.env.SECRET_TOKEN, async (error, user) => {
        if (error) {
            return res.status(401).json({
                message: "Token invalido"
            })
        }
        req.user = user;
        next();
    })
}

module.exports = verifyToken;