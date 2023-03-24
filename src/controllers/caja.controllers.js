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
};


export const obtenerAsiento = async (req,res)=>{
try {
    console.log(req.params.id)
    const clienteBuscado = await caja.findById(req.params.id);
    res.status(200).json(clienteBuscado);
} catch (error) {
    console.log(error);
        res.status(404).json({
            mensaje:"Error no se pudo encontrar el asiento"
        })
}
};

export const editarAsiento= async (req,res)=>{
    try {
        await caja.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje:"El asiento fue actualizado con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"Error el asiento no pudo ser actualizado"
        })
    }
};


export const borrarAsiento = async (req,res)=>{
    try {
        await caja.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:"Cliente eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"Error, el cliente no pudo ser eliminado"
        })
    }
}