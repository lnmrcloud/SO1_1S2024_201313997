import logo from './logo.svg';
import './App.css';

function App() {

  const convertiraBase64=(archivos) =>{
    Array.from(archivos).forEach(archivo=>{
      var reader =new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload=function(){
        var arrayAux=[];
        var base64= reader.result;
        arrayAux=base64.split(',');
        console.log(arrayAux[1]);
      }
    })

  }


  return (
    <div className="App">
      <input type="file" multiple onChange={(e)=>convertiraBase64(e.target.files)}/>
    </div>
  );
}

export default App;
