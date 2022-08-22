const jwt = require('jsonwebtoken');

const generateToken = async (user) => {
    const tokenSign = {
        id: user._id,
        roleid: user.roleId
    };

    const expire = {
        expiresIn: '1d'
    };

    return jwt.sign(tokenSign, process.env.SECRET_TOKEN, expire);
}

module.exports = generateToken;