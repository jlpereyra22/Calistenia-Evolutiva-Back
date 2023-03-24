import { Router } from "express";
import { agregarCliente, editarCliente, listarClientes, obtenerCliente } from "../controllers/clientes.controllers";

const router = Router();

router.route("/clientes")
.get(listarClientes)
.post(agregarCliente)

router.route("/clientes/:id")
.get(obtenerCliente)
.put(editarCliente)
.delete()    


export default router;