import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
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
}
});

const usuario = mongoose.model("usuario",usuarioSchema);
export default usuario;