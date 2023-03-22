import cliente from "../models/cliente"

export const listarClientes =(req,res)=>{
    res.send("Aqui devolveremos un arreglo con los clientes")
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