import  "../../../src/App.css";
import games from "./clase7-juegos/games.json";
import GameCard from "./clase7-juegos/GameCard";
import styles from "./divFlex.module.css"
import {useState} from 'react';


function C7() {

    let [juegoscomprados,setJuegoscomprados] = useState(0);




    function handleComprar(id) {
    console.log("Se compro el siguiente juego: " + id);
    setJuegoscomprados(juegoscomprados + 1)
    console.log(juegoscomprados);

    }

return (
    <>
    <h1 
        className = {styles.flex}>Juegos comprados: {juegoscomprados}
    </h1>

    {games.map((game) => {
        return (
        <GameCard
            key={game.id}
            title={game.name}
            img={game.imgUrl}
            alt={game.name}
            id={game.id}
              //cuando hacemos click llama a handlecomprar
            onbuy={handleComprar}
        >
        </GameCard>
        );
    })}
    </>
);
}

export default C7;
