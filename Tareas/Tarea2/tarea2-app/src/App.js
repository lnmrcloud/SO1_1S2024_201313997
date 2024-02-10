import { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from './componentes/datos';

function App(){


const convertiraBase64=(archivos)=>{
  Array.from(archivos).forEach(archivo => {
    var reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload=function(){
      var aux = []
      var base64 = reader.result;
      aux = base64.split(',');
      base64=aux[1];

      var objeto = {
        "objeto": [{
          titulo:"imagennueva",
          base64: base64
       }]
      }

      console.log(JSON.stringify(objeto));

      fetch("http://127.0.0.1:8080/items", {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'no-cors',
        body: JSON.stringify(objeto)
      }).then(response => response.json())
      .then(data => 
        {
          //setButtonText(data)
          })
      .catch(error => console.error(error));


    }
  });

  }

  const [buttontext,setButtonText] = useState('...');

  const handleClick = () => {
    
    fetch("http://127.0.0.1:8080/items", {
      method: "POST",
      headers: {
        "Conten-type": "aplication/json",
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'no-cors',
      body: JSON.stringify("hola")
    }).then(response => response.json())
    .then(data => 
      {
        //setButtonText(data)
        })
    .catch(error => console.error(error));

    /*

    //const result = fetch(`http://127.0.0.1:8080/items?Titulo=${objeto.titulo}&Imagen64=${objeto.base64}`)
    //const respuesta = fetch("http://127.0.0.1:8080/items", objeto)
    fetch('http://127.0.0.1:8080/items?' + new URLSearchParams({
      Titulo: objeto.titulo,
      Imagen64: objeto.base64
  }))
            .then(response => response.json())
            .then(data => 
              {
                setButtonText(data)
                })
            .catch(error => console.error(error));



  */
        
  }





return (
  <div>
    <h1>Tarea 2</h1>
    <input type="file" onChange={(e)=>convertiraBase64(e.target.files)}></input><br></br><br></br><br></br>
    <button onClick={handleClick}>Guardar imagenes</button>


  <h1>{JSON.stringify(buttontext)}</h1>


</div>);

}

export default App;


