import { Router } from "express";
import { agregarAsiento, borrarAsiento, editarAsiento, listarAsientos, obtenerAsiento } from "../controllers/caja.controllers";
import { check } from "express-validator";
const routerCaja = Router();

routerCaja.route("/cajaDiaria")
.get(listarAsientos)
.post([
    check("Nombre")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Operacion")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isIn(["Ingreso","Egreso"])
    .withMessage("Debe contener un estado"),
    check("Fecha")
    .notEmpty()
    .withMessage("Este es un dato obligatorio"),
    check("Hora")
    .notEmpty()
    .withMessage("Este es un dato obligatorio"),
    check("Operador")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 5, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres")
],agregarAsiento)

routerCaja.route("/cajaDiaria/:id")
.get(obtenerAsiento)
.put([
    check("Nombre")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Operacion")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isIn(["Ingreso","Egreso"])
    .withMessage("Debe contener un estado"),
    check("Fecha")
    .notEmpty()
    .withMessage("Este es un dato obligatorio"),
    check("Hora")
    .notEmpty()
    .withMessage("Este es un dato obligatorio"),
    check("Operador")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 5, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres")
],editarAsiento)
.delete(borrarAsiento)

export default routerCaja;