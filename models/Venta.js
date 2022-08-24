const {Schema, model} = require('mongoose');

const Venta = new Schema ({
    dniCliente: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    articulos: [{
        articulo: {
            type: Schema.Types.ObjectId,
            ref: "Articulo",
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        precioUnitario: {
            type: Number,
            ref: "Articulos",
            required: true
        },
        subTotalProducto: {
            type: Number,
            required: true
        }
        
    }],
    formaPago: {
        type: Number,
        required: true
    },
    subTotal: {
        type: Number,
        required: true
    },
    recargo: {
        type: Number,
        required: true
    },
    descuento: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = model("Venta", Venta);