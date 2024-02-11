import { useEffect } from "react";

function Datos(){
    function getDatos(){
        //fetch("http://127.0.0.1:9000/items")
        fetch("http://127.0.0.1:9000/items")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {getDatos()});
    
    return (<h1>Obtener datos</h1>)
}

export default Datos