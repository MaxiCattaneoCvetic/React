import styles from "../clase-9/pedido.module.css"

function Pedido(props){

    function handleClick(){
        console.log("estoy llamando desde pedido");
        props.onDelete()
        
    }


    return(
        <div className={styles.pedido}>
            <div key={props.id} className={styles.card}>
            <h2>{props.descripcion}</h2>
            <button onClick ={handleClick}>Delete</button>
            </div>
        </div>  

    )



    

}

export default Pedido;
