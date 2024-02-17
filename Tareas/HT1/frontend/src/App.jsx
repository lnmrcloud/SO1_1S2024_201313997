import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Obtener_ram} from "../wailsjs/go/main/App";


function App() {
    const [resultText, setResultText] = useState("Click para conocer tu estado de memoria 👇");
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function obtener_ram(result) {
        //Obtener_ram(name).then(updateResultText);
        Obtener_ram().then(updateResultText);

    }

    return (
        <div id="App">
            <img src={logo} id="logo" alt="logo"/>
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <button className="btn" onClick={obtener_ram}>RAM</button>
            </div>
        </div>
    )
}

export default App
