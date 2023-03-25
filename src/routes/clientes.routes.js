import { Router } from "express";
import { agregarCliente, borrarCliente, editarCliente, listarClientes, obtenerCliente } from "../controllers/clientes.controllers";
import { check } from "express-validator";
const router = Router();



router.route("/clientes")
.get(listarClientes)
.post(agregarCliente)

router.route("/clientes/:id")
.get(obtenerCliente)
.put(editarCliente)
.delete(borrarCliente)    




export default router;