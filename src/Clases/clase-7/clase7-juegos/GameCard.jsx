import styles from "./gamecard.module.css";
import PropTypes from 'prop-types';
import {useState} from 'react';

function GameCard(props) {
  //utilizamos la key, esto permite identificar los elementos y renderizarlos en el lugar indicado
  //con esto react identifica a los elementos como unicos

      function handleClick() {
        console.log(props.id);
        //cuando hacmeos click card sabe wque tiene que ejecutar la funcion que viene por parametro 
        props.onbuy(props.id)
      }
      const [isVisible,setIsvisible] = useState(true);
      function handleToggle(){
        console.log(isVisible);
        setIsvisible(!isVisible);
      }

      return(
        
      <div key={props.id} className={styles.card}>
        <div className={styles.childcard}>
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.alt} />
        <button onClick={handleClick}>Buy</button>
        <button onClick={handleToggle}>Toggle</button>
        </div>
      </div>
    )
      }

GameCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onComprar: PropTypes.func.isRequired
};


export default GameCard;
