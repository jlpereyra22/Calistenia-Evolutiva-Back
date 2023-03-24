import { Router } from "express";
import { agregarCliente, borrarCliente, editarCliente, listarClientes, obtenerCliente } from "../controllers/clientes.controllers";

const router = Router();

//Rutas para clientes

router.route("/clientes")
.get(listarClientes)
.post(agregarCliente)

router.route("/clientes/:id")
.get(obtenerCliente)
.put(editarCliente)
.delete(borrarCliente)    




export default router;