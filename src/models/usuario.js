import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
Usurio:{
    type: String,
    required:true,
    minLenght:5,
    maxLenght:50
},
Contraseña:{
    type:String,
    required:true,
    minLenght:4,
    maxLenght:50
}
});