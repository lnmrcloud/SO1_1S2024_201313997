var express = require('express') //llamamos a Express
const mongoose = require('mongoose')

const ModelImagen = require('./model_imagen')

var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

// manejador de imagenes


app.get("/", async (req, res) => {
 
  const data = new ModelImagen({
    producto_nombre: "nueva imagen"
});
data.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));


    res.json({ 
    mensaje: '¡Hola Mundo!' })   

})



app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

mongoose.connect('mongodb://root:root@127.0.0.1:27000/'),{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)