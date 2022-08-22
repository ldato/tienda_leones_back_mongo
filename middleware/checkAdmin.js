const {request, response} = require('express');
require('../connection');
const Role = require('../models/Role');

const checkAdmin = async (req = request, res= response, next) => {
    const userRoleId = await req.user.roleid
    const userRole = await Role.findOne({roleId: userRoleId});
    if (userRole.nombre == "Admin") {
        next();   
    } else {
        return res.status(401).json({
            message: "Usted no tiene los permisos necesarios para realizar esta operación"
        })
      
    }
} 

module.exports = checkAdmin;