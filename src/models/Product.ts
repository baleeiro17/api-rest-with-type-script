import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }, 
    price: {
        type: Number, 
        required: true
    },
    producer: {
        type: Number, 
        required: true
    },
    description: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const product = mongoose.model('Product', schema);

export default product;