import './App.css';
import { useState } from 'react';
import React from 'react';
//import Datos from './components/datos';

function App() {
  const [buttontext,setButtonText] = useState('...');

  const handleClick = () => {
    
    const respuesta = fetch("http://127.0.0.1:9000/data")
            .then(response => response.json())
            .then(data => 
              {
                setButtonText(data)
                })
            .catch(error => console.error(error));
  }


  return (<div>
          <h1>Obtener datos</h1>
          <button onClick={handleClick}>Consultar datos</button>
          <h1>{JSON.stringify(buttontext)}</h1>
    </div>)
}

export default App;
