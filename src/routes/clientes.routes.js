import { Router } from "express";
import { agregarCliente, listarClientes, obtenerCliente } from "../controllers/clientes.controllers";

const router = Router();

router.route("/clientes")
.get(listarClientes)
.post(agregarCliente)

router.route("/clientes/:id")
.get(obtenerCliente)
.put()
.delete()    


export default router;