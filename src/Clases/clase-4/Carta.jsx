function Carta(props) {
const renderTitle = props.title ? "card-title" : "No hay titulo" ;
const renderFooter = props.footer ? "card-footer" : "No hay footer";

return (
    <div>
    <div >
        <h1>{renderTitle}</h1>
    </div>
        {props.children}
    <div>
        <p>{renderFooter}</p>
    </div>
        
    </div>
);
}

export default Carta;
