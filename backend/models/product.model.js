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
    Seller: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});
const Product = mongoose.model("Product", productSchema);
export default Product;
