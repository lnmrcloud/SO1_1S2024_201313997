const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var modelImage = new Schema({
    producto_nombre: {
        type: String
    },

})

const model = mongoose.model('ModelImagen', modelImage);

module.exports = model; 