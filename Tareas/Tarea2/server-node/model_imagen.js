const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var modelImage = new Schema({
    titulo: {
        type: String
    },
    path:{
        type: String
    }

})

const model = mongoose.model('ModelImagen', modelImage);

module.exports = model; 