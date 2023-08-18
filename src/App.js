import logo from "./logo.svg";
import "./App.css";
import Ejercicio1 from "./Ejercicio1/Ejercicio1";
import Ejercicio2 from "./Ejercicio2/Ejercicio2";
import Ejercicio3 from "./Ejercicio3/Ejercicio3";

function App() {
    return (
        <div className="App">
            <h2>Ejercicio 1</h2>
            <Ejercicio1 />
            <hr />
            <h2>Ejercicio 2</h2>
            <Ejercicio2 />
            <hr />
            <h2>Ejercicio 3</h2>
            <Ejercicio3 />
        </div>
    );
}

export default App;
