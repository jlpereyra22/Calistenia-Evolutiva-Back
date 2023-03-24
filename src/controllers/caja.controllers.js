import caja from "../models/caja";

export const listarAsientos = async(req,res)=>{
    try {
       const listaAsiento = await caja.find();
       res.status(200).json(listaAsiento);
     
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"Error al obtener la DB"
        })
    }
};


export const agregarAsiento = async(req,res)=>{
    try {
        console.log(req.body);
        const asientoNuevo= new caja(req.body);
        await asientoNuevo.save();
        res.status(201).json({
            mensaje:"Asiento agregado exitosamente"
        }) 
    } catch (error) {
     console.log(error);
     res.status(400).json({
        mensaje:"Error al agregar un Asiento"
     })   
    }
}