import mongoose, { Schema } from "mongoose";

const clienteSchema = new Schema({
  Nombre: {
    type: String,
    required: true,
    minLenght: 2,
    maxLenght: 50,
  },
  Dni: {
    type: Number,
    required: true,
    unique: true,
    minLenght: 1,
    maxLenght: 12,
  },
  Telefono: {
    type: Number,
    required: true,
    minLenght: 5,
    maxLenght: 25,
  },
  Mail: {
    type: String,
    required: true,
    unique: true,
    minLenght: 1,
    maxLenght: 50,
  },
  FNacimiento: {
    type: String,
    required: true
  },

  Estado: {
    type: String,
    required: true
  },
  FPago: {
    type: String,
    required: true
  },
  Monto: {
    type: Number,
    required: true,
    min: 1,
    max: 10000
  }

});

const cliente = mongoose.model("cliente", clienteSchema);
export default cliente;
