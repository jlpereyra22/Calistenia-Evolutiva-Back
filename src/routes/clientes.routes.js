import { Router } from "express";
import { agregarCliente, borrarCliente, editarCliente, listarClientes, obtenerCliente } from "../controllers/clientes.controllers";
import { check } from "express-validator";
const router = Router();



router.route("/clientes")
.get(listarClientes)
.post([
    check("Nombre")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Dni")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isNumeric()
    .withMessage(" El dato debe ser tipo numero")
    .isLength({min: 1, max: 12})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Telefono")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 5, max: 25})
    .withMessage("Debe respetar las limitaciones de caracteres")
    .isNumeric()
    .withMessage(" El dato debe ser tipo numero"),
    check("Mail")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 1, max: 50})
    .withMessage("Debe respetar las limitaciones de caracteres")
    .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
      .withMessage("Debe enviar un mail válido"),
      check("FNacimiento")
      .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isLength({min: 5, max: 25})
    .withMessage("Debe respetar las limitaciones de caracteres"),
    check("Estado")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isIn(["Activo", "Baja"])
    .withMessage("Debe contener un estado"),
    check("FPago")
    .notEmpty()
    .withMessage("Este es un dato obligatorio"),
    check("Monto")
    .notEmpty()
    .withMessage("Este es un dato obligatorio")
    .isNumeric()
    .withMessage(" El dato debe ser tipo numero")

],agregarCliente)

router.route("/clientes/:id")
.get(obtenerCliente)
.put([
  check("Nombre")
  .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isLength({min: 2, max: 50})
  .withMessage("Debe respetar las limitaciones de caracteres"),
  check("Dni")
  .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isNumeric()
  .withMessage(" El dato debe ser tipo numero")
  .isLength({min: 1, max: 12})
  .withMessage("Debe respetar las limitaciones de caracteres"),
  check("Telefono")
  .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isLength({min: 5, max: 25})
  .withMessage("Debe respetar las limitaciones de caracteres")
  .isNumeric()
  .withMessage(" El dato debe ser tipo numero"),
  check("Mail")
  .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isLength({min: 1, max: 50})
  .withMessage("Debe respetar las limitaciones de caracteres")
  .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .withMessage("Debe enviar un mail válido"),
    check("FNacimiento")
    .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isLength({min: 5, max: 25})
  .withMessage("Debe respetar las limitaciones de caracteres"),
  check("Estado")
  .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isIn(["Activo", "Baja"])
  .withMessage("Debe contener un estado"),
  check("FPago")
  .notEmpty()
  .withMessage("Este es un dato obligatorio"),
  check("Monto")
  .notEmpty()
  .withMessage("Este es un dato obligatorio")
  .isNumeric()
  .withMessage(" El dato debe ser tipo numero")

],editarCliente)
.delete(borrarCliente)    




export default router;