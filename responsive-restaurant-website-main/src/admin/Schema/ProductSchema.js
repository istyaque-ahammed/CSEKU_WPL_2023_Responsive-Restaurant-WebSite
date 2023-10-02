const mongoose = require('mongoose');

 const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: String,
    imageUrl: String,
});

