import Form from "./Form";
import Pedido from "./Pedido";
import { useState } from "react";





let idGenerator = 0;
let array = []

function C9 () {
    const [pedidos,setPedidos] = useState(array)
    

    let handlePedido = (pedido) =>{
        console.log("recibi el pedido:" + pedido);
        const pedidoNuevo ={
            id:idGenerator++,
            descripcion:pedido
        }
        const pedidosActualizados = [...pedidos,pedidoNuevo]
        setPedidos(pedidosActualizados)
    }
    let handeEliminar =(id) =>{
        console.log("estoy llamando desde c9:" + id);
        //haceme un nuevo array, filtrame por id de producto :: cuando producto.id sea igual a id lo descarta 
        //cuando producto.id sea distinto lo suma al nuevoarray
        const nuevoArray = pedidos.filter(product => product.id != id)
        console.log(nuevoArray);
        //seteamos el nuevo status del pedido
        setPedidos(nuevoArray)
        
    }

    return(
        <>
        
        <Form onPedido={handlePedido}>
        </Form>

    {pedidos.map((pedido) =>{
        return(
            <Pedido
            key={pedido.id}
            descripcion={pedido.descripcion}
            onDelete = {()=>handeEliminar(pedido.id)}
            >
            </Pedido>
        )})}

</>
    )





}

export default C9;
