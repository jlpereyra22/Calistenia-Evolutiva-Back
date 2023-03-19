import  express  from "express";

console.log("hellouda world");
//Instanciamos express
const app = express()

//Creacion de variable para apoderarnos del puerto 4000

app.set("port", process.env.PORT || 4000);
//Utilizamos el puerto configurado
app.listen(app.get("port"),()=>{
    console.log("Operativos en el Puerto" + app.get("port"));
})