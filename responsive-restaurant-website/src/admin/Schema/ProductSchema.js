import mongoose from "mongoose";

const  ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: String,
    brand: String,
    discount:String,
    imageUrl: String,
    rating: String
})
export default ProductSchema;