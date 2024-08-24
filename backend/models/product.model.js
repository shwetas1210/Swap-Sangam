import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});
const Product = mongoose.model('Product', productSchema);
export default Product;
