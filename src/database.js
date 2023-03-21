import mongoose from "mongoose";
//local host= 127.0.0.1
const url = "mongodb://127.0.0.1:27017/calistenia-evo";

mongoose.connect(url);

const connect = mongoose.connection;

connect.once(`open`, () => {
  console.log("DB connect");
})
