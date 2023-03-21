import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database"

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Operativos en el Puerto" + app.get("port"));
});

app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));
console.log(path.join(__dirname, "../public"));



app.get(`/prueba`, (req, res) => {
  res.send("Esto es una prueba de configuracion de Rutas");
});
