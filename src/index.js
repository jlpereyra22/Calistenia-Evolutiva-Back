import  express  from "express";
import morgan from "morgan";


console.log("hellouda world");
//Instanciamos express
const app = express()
app.use(morgan(`dev`))
//Creacion de variable para apoderarnos del puerto 4000

app.set("port", process.env.PORT || 4000);
//Utilizamos el puerto configurado
app.listen(app.get("port"),()=>{
    console.log("Operativos en el Puerto" + app.get("port"));
});

//http://localhost:4000/prueba(Peticion Get)
app.get(`/prueba`,(req,res)=>{
    res.send("Esto es una prueba de configuracion de Rutas");
});

