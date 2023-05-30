import "../../../src/App.css";
import { H3Dinamic } from "./H3Dinamic";
import { AddList } from "./AddChildren";

function forLike() {
  console.log("Diste like");
}

function C1() {
  return (
    <>
      <h1>Matilda</h1>
      <p>Nena con poderes</p>
      <button onClick={forLike}>Click for like!</button>
      <H3Dinamic title="Titulos Dinamicos:"></H3Dinamic>
      <H3Dinamic title="Géneros"></H3Dinamic>
      <H3Dinamic title="Actores"></H3Dinamic>
      <h2>Lista 1 </h2>
      <AddList>
        <li>Acción</li>
        <li>Romance</li>
        <li>Drama</li>
      </AddList>
      <h2>Lista 2 </h2>
      <AddList>
      <li>Leonardo DiCaprio</li>
      <li>Brad Pitt</li>
      <li>Tom Cruise</li>
      <li>Will Smith</li>
      <li>Julia Roberts</li>
      <li>Angelina Jolie</li>
      <li>Meryl Streep</li>
      <li>Scarlett Johansson</li>
      </AddList>
    </>
  );
}

export default C1;
