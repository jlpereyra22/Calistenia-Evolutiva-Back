import { Router } from "express";
import { agregarCliente, listarClientes } from "../controllers/clientes.controllers";

const router = Router();

router.route("/clientes")
.get(listarClientes)
.post(agregarCliente)

export default router;