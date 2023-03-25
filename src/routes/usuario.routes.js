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


export default usuarioRouter;