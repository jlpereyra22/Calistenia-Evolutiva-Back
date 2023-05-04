import { Router } from "express";
import { check } from "express-validator";
import { agregarUsuario, borrarUsuario, editarUsuario, listarUsuarios, login, obtenerUsuario } from "../controllers/usuario.controllers";

const usuarioRouter = Router();

usuarioRouter.route("/usser")
.get(listarUsuarios)
.post([
    check("Nombre")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Usuario")
    .notEmpty()
    .isLength({min: 1, max: 50})
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
],agregarUsuario)
 
usuarioRouter.route("/usser/:id")
.get(obtenerUsuario)
.put([
    check("Nombre")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Usuario")
    .notEmpty()
    .isLength({min: 1, max: 50})
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
],editarUsuario)
.delete(borrarUsuario)




export default usuarioRouter;