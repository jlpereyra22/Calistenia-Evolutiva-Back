import usuario from "../models/usuario";
import { validationResult } from "express-validator";

export const listarUsuarios = async(req,res)=>{
    try {
    
        const listaUsuario= await usuario.find();
        res.status(200).json(listaUsuario);
    } catch (error) {
        console.log(error);
    res.status(404).json({
        mensaje: "Error al obtener la base de datos"
    })
    }
};

export const agregarUsuario = async(req,res)=>{
try {
    console.log(req.body);
    const usuarioNuevo= new usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
        mensaje: "el usuario fue agrergado con exito"
    })
} catch (error) {
    console.log(error);
        res.status(400).json({
            mensaje:"Error al intentar agregar"
        })
}
}