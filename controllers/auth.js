const express = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.request) => {
    const {name, email, passsword} = req.body

    const error = ValdationResult( req );
    if(!error.isEmpty()){
        return res.status(400).json({
            ok:false,
            error: error.mapped()
        })
    }

    res.status(200).json({
        ok:true,
        name, email, passsword
    })
}

const loginUsuario = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

const revalidarToken = (req, res = express.request)=>{
    res.json({
        ok: true
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}