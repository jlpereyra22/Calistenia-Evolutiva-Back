import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";


console.log("hellouda world");
//Instanciamos express
const app = express();

//MIDD------------------------------

//Configuramos morgan para recibir res de peticiones
app.use(morgan(`dev`));

//Cors  peticionar remotamente
app.use(cors());

//Express para interpretar Json Format
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//path para encontrar el directorio
app.use(express.static(path.join(__dirname,`../public`)));
console.log(path.join(__dirname,`../public`))

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

