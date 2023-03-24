import { Router } from "express";
import { agregarAsiento, listarAsientos } from "../controllers/caja.controllers";

const routerCaja = Router();

routerCaja.route("/cajaDiaria")
.get(listarAsientos)
.post(agregarAsiento)


export default routerCaja;