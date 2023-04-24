import { Router } from "express";
import { check } from "express-validator";
import { agregarUsuario, listarUsuarios, login } from "../controllers/usuario.controllers";

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
    check("Rol","El Rol es un dato obligatorio"),
],agregarUsuario)


export default usuarioRouter;