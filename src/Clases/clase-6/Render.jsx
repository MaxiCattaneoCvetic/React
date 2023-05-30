import productos from "./productos.json";
import style from "./render.module.css";
import account from "./accounts.json"



function Render() {
let productRender = productos.map((data) => {
    return (
    <section key={data.id} style={style.section}>
        <h1>{data.nombre}</h1>
        <p>Precio: ${data.precio}</p>
        <p>{data.descripcion}</p>
        <button>Comprar</button>
    </section>
    );
});




let accRender = account.map((accData) =>{
    return (
        <section key={accData.id} style={style.section}>
            <h1>{accData.userName}</h1>
            <p><a href={`https://twitter.com/${accData.account}`} target="_blank" rel="noreferrer">Twitter </a> </p>
        </section>
        );
})


return (
    <>
    <div style={style}>{productRender}</div>;
    <div>{accRender}</div>
    </>
)
}

export default Render;
