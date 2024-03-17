import { useState } from 'react';
import {useRef} from 'react';
import Axios from 'axios';

var enviar_titulo
var enviar_base64

function App() {

  const inputRef = useRef(null); 
  const inputRef2 = useRef(null); 

  //CONSULTAR LA CANTIDAD DE RAM EN USO ACTUAL
  const handleClick = () => {
    const respuesta = fetch("http://servergo:9000/ram_kernel")
            .then(response => response.json())
            .then(data => 
              {
                setButtonText(data)
                })
            .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <h1>Proyecto 1 - Uso de recursos</h1>
      <h2>RAM</h2>
      <button onClick={handleClick}>Actualizar uso</button>
      <br></br><br></br><br></br>
      <h2>CPU</h2>

      <br></br><br></br><br></br>
      <h1>Proyecto 1 - Procesos CPU</h1>
      <h2>Arbol de procesos</h2>
      
      <br></br><br></br><br></br>
    </div>
  );
}

export default App;
