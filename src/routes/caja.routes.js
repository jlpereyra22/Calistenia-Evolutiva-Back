import { Router } from "express";
import { agregarAsiento, borrarAsiento, editarAsiento, listarAsientos, obtenerAsiento } from "../controllers/caja.controllers";

const routerCaja = Router();

routerCaja.route("/cajaDiaria")
.get(listarAsientos)
.post(agregarAsiento)

routerCaja.route("/cajaDiaria/:id")
.get(obtenerAsiento)
.put(editarAsiento)
.delete(borrarAsiento)

export default routerCaja;