import { Router } from "express";
import { check } from "express-validator";
import { agregarUsuario, borrarUsuario, editarUsuario, listarUsuarios, login } from "../controllers/usuario.controllers";

const usuarioRouter = Router();

usuarioRouter.route("/usser")
.get(listarUsuarios)
.post([
    check("Usuario","Usuario es un dato obligatorio"),
    check("Contraseña","La contraseña debe contar minimo 8 caracteres")
], login)
 
usuarioRouter.route("/usser/agregar")
.post([
    check("Nombre","El Nombre es un dato obligatorio"),
    check("Usuario","Usuario es un dato obligatorio"),
    check("Contraseña","La contraseña debe contar minimo 8 caracteres"),
    check("Rol","El Rol es un dato obligatorio")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isIn(["Empleado","Maestro"])
    .withMessage("Debe contener un estado")
],agregarUsuario)

usuarioRouter.route("/usser/:id")
.put([
    check("Nombre")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Usuario")
    .notEmpty()
    .isLength({min: 1, max: 12})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Contraseña")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 5, max: 25})
    .withMessage("Debe respetar las limitaciones de caracteres"),

    check("Rol")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isIn(["Empleado", "Maestro"])
    .isLength({min: 1, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres")
    
], editarUsuario)
.delete(borrarUsuario)


export default usuarioRouter;