import "../../../src/App.css";
import Item from "./module-Item/Item";
import Lista from "./module-List/Lista";


function C5() {
  return (
    <>
      <Lista>
        <Item>Elantris</Item>
        <Item>El camino de los reyes</Item>
        <Item>El imperio final</Item>
        <Item>El pozo de la ascensión</Item>
        <Item>El héroe de las eras</Item>
        <Item>El aliento de los dioses</Item>
        <Item>Palabras radiantes</Item>
        <Item>Juramentada</Item>
      </Lista>
      <div className="compact-theme">
        <Lista>
          <Item>Elantris</Item>
          <Item>El camino de los reyes</Item>
          <Item>El imperio final</Item>
          <Item>El pozo de la ascensión</Item>
          <Item>El héroe de las eras</Item>
          <Item>El aliento de los dioses</Item>
          <Item>Palabras radiantes</Item>
          <Item>Juramentada</Item>
        </Lista>
      </div>
    </>
  );
}

export default C5;
