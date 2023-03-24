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

export const obtenerCliente = async (req,res)=>{
    try {
        console.log(req.params.id)
        const clienteBuscado = await cliente.findById(req.params.id);
        res.status(200).json(clienteBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"Error no se pudo encontrar el cliente"
        })
    }
};


export const editarCliente = async (req, res)=>{
    try {
        await cliente.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje:"El cliente fue actualizado con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"Error el producto no pudo ser actualizado"
        })
    }
};

export const borrarCliente = async (req,res)=>{
    try {
        await cliente.findByIdAndDelete(req.params.id);
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