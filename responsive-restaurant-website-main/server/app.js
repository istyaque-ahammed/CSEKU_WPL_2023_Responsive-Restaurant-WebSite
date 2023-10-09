const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Nz6mCBwDyAJHsE8b34r5uEFfAOugwVGuWuR6PN0dcXGpZdY1gcnMxEc6rFbD6izY7emynccD2ZBPdHI8VE1lx0p00Csl70uv3")
app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
    console.log(products);
    
    const lineItems = products.map((product)=>({
        price_data:{
            currency: "bdt",
            product_data:{
                name: product.name
            },
            unit_amount: product.price * 100, 
        },
        quantity: product.amount
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        
    })
    res.json({id: session.id})
})

app.listen(7000,()=>{
    console.log("server start")
})
