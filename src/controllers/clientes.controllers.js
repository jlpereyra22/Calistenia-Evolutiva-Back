

export const listarClientes =(req,res)=>{
    res.send("Aqui devolveremos un arreglo con los clientes")
};

export const agregarCliente= (req,res)=>{
    console.log(req.body)
    res.send("Esto es una prueba de la peticion POST")
};