import mongoose, {Schema} from "mongoose";

const cajaSchema = new Schema({
    Nombre:{
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 50,
    },
    Operacion:{
        type: String,
        required: true
      },
      Monto:{
        type: Number,
        required: true,
        min: 1,
        max: 10000
      },
      Fecha:{
        type: String,
    required: true
      },
      Hora:{
        type: String,
    required: true
      },
      Operador:{
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 50,
      },
      
    }
)