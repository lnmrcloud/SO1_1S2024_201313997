import FileBase64 from 'react-file-base64';
import { createItem, getItems } from './componentes/datos';
import { useState } from 'react';
import {useRef} from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';

var enviar_titulo
var enviar_base64

var obtener_titulo

function App(){

  const inputRef = useRef(null); 
  const inputRef2 = useRef(null); 

  const [imageSrc, setImageSrc] = useState('initial-image-src.jpg');


  //Enviar a guardar titulo e imagen a la BD Mongo
  const handleClick = () => {
    Axios.post("http://127.0.0.1:8080/items", {
       titulo: enviar_titulo,
       base64: enviar_base64
    })
}

//Consultar por titulo la imagen a mostrar de base64 a imagen
const handleClick2 = () => {
  var imagen = Axios.post("http://127.0.0.1:8080/obteneritems", {
     titulo: inputRef2.current.value
  }).then(res => {
    const data = res.data
    changeImageSrc(data);
  })
}

const convertiraBase64=(archivos)=>{
  Array.from(archivos).forEach(archivo => {
    var reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload=function(){
      var aux = []
      var base64 = reader.result;
      aux = base64.split(',');
      enviar_titulo = inputRef.current.value
      enviar_base64 = aux[1];
    }
  });

  }

  const changeImageSrc = (data64) => {
    setImageSrc('data:image/png;base64,'+ data64);
  }

return (
  <div>
    <h1>Tarea 2</h1>
    <h2>Nombre de imagen:</h2>
    <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />
    <input type="file" onChange={(e)=>convertiraBase64(e.target.files)}></input><br></br><br></br><br></br>
    <button onClick={handleClick}>Guardar imagenes</button>

    <h2>Nombre de imagen a buscar:</h2>
    <input
        ref={inputRef2}
        type="text"
      />
    <button onClick={handleClick2}>Mostrar imagen</button>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
    <img src={imageSrc}/>

</div>);

}

export default App;


