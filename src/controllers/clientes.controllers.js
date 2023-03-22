import cliente from "../models/cliente"

export const listarClientes = async(req,res)=>{
   try {
    const listaCliente= await cliente.find();
    res.status(200).json(listaCliente);
    
   } catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje: "Error al obtener la base de datos"
    })

   }
};

export const agregarCliente= async(req,res)=>{
    try {
        console.log(req.body);
        const clienteNuevo= new cliente(req.body);
        await clienteNuevo.save();
        res.status(201).json({
            mensaje: "el cliente fue agrergado con exito"
        })

        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:"Error al intentar agregar"
        })
    }
   
};