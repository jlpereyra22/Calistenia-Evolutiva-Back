import usuario from "../models/usuario";
import { validationResult } from "express-validator";

export const listarUsuarios = async (req, res) => {
  try {
    const listaUsuario = await usuario.find();
    res.status(200).json(listaUsuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener la base de datos",
    });
  }
};

export const agregarUsuario = async (req, res) => {
try {
  const usuarioNuevo= new usuario(req.body);
  await usuarioNuevo.save();
  res.status(201).json({
    mensaje:"El Usuario fue correctamente creado"
  })
} catch (error) {
  console.log( error);
  res.status(400).json({
    mensaje:"Error al agregar un usuario"
  })
}
};

export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { Usuario, Contraseña } = req.body;
    let usser = await usuario.findOne({ Usuario });
    if (!usser) {
      return res.status(400).json({
        mensaje: "Usuario incorrecto",
      });
    }
    if (Contraseña !== usser.Contraseña) {
      return res.status(400).json({
        mensaje: "usuario o contraseña incorrecta",
      });
    }
    res.status(200).json({
      mensaje: "Usuario existe",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar",
    });
  }
};

export const obtenerUsuario = async (req,res)=>{
  try {
      console.log(req.params.id)
      const usuarioBuscado = await usuario.findById(req.params.id);
      res.status(200).json(usuarioBuscado);
  } catch (error) {
      console.log(error);
      res.status(404).json({
          mensaje:"Error no se pudo encontrar el usuario"
      })
  }
};

export const editarUsuario = async (req, res)=>{
  try {
      const errores = validationResult(req);
      if(!errores.isEmpty()){
          return res.status(400).json({
              errores:errores.array()
          })
      }
      await usuario.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
          mensaje:"El usuario fue actualizado con exito"
      })
  } catch (error) {
      console.log(error);
      res.status(404).json({
          mensaje:"Error el usuario no pudo ser actualizado"
      })
  }
};

export const borrarUsuario = async (req,res)=>{
  try {
      await usuario.findByIdAndDelete(req.params.id);
      res.status(200).json({
          mensaje:"Usuario eliminado correctamente"
      })
  } catch (error) {
      console.log(error)
      res.status(404).json({
          mensaje:"Error, el usuaario no pudo ser eliminado"
      })
  }
}