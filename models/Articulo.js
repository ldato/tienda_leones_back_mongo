const {Schema, model} = require('mongoose');

const Articulo = new Schema({
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: "Marca",
        required: true
    },
    proveedor:{
        type: Schema.Types.ObjectId,
        ref: "Proveedor",
        required: true
    },
    precioVenta:{
        type: Number,
        required: true
    },
    precioCosto:{
        type: Number,
        required: true
    },
    cantidad:{
        type:Number,
        default: 0
    }
});

module.exports = model("Articulo", Articulo);