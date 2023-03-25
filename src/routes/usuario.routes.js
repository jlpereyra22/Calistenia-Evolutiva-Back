import { Router } from "express";
import { check } from "express-validator";
import { agregarUsuario, listarUsuarios } from "../controllers/usuario.controllers";

const usuarioRouter = Router();

usuarioRouter.route("/usser")
.get(listarUsuarios)
.post(agregarUsuario)


export default usuarioRouter;