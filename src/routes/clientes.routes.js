import { Router } from "express";

const router = Router();

router.route("/clientes")
.get((req,res)=>{
    res.send("Aqui devolveremos un arreglo con los clientes")
}).post((req,res)=>{
    res.send("Esto es una prueba de la peticion GET")
})

export default router;