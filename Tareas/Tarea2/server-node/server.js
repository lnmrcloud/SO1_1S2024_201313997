var express = require('express'); //llamamos a Express
const url = require('url');
const mongoose = require('mongoose')

const ModelImagen = require('./model_imagen');
const { parse } = require('path');

var app = express()               
app.use(express.json())

var port = process.env.PORT || 8080  // establecemos nuestro puerto
var fs=require('fs')

// manejador de imagenes


app.get("/", async (req, res) => {
 
  const data = new ModelImagen({
    titulo: "nueva imagen",
    path: "nuevo path"
});
data.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
})

app.get("/items", async (req, res) => {
 
  console.log(req.query);

  const parsedURL = url.parse(req.url,true);

  if(parsedURL.pathname === '/items'){

    // parametros
    var titulo = parsedURL.query.titulo;
    var path = parsedURL.query.base64;

    var data = new ModelImagen({
      titulo: "nueva imagen",
      path: "nuevo path"
  });
    data.titulo = titulo;
    data.path = path;

    data.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    res.end();
  }

})


app.post('/items',(req, res) => {
    console.log(req.body);

    var titulo = req.body.titulo;
    var path = req.body.base64;

    var data = new ModelImagen({
      titulo: "nueva imagen",
      path: "nuevo path"
  });
    data.titulo = titulo;
    data.path = path;

    data.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
    res.end();

});

mongoose.connect('mongodb://127.0.0.1:27017/'),{
  //mongoose.connect('mongodb://mongo:27017/'),{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)