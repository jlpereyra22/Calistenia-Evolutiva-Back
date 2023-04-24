import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
Nombre:{
    type:String,
    required:true,
    minLenght:2,
    maxLenght:40
},    
Usuario:{
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
},
Rol:{
    type:String,
    required:true,
    
}
});

const usuario = mongoose.model("usuario",usuarioSchema);
export default usuario;