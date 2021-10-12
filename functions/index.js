const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_la51JOrCRH2MDO0OCdZw7giM5woh9z70R2ve9ma5f53PN2LEjvyht7o3c8Cw8cMicv0OSSgvKal6vXRyHrkLzG36qHw00Er1vSSYB')

//API 

//- App config
const app = express();

//- Middlewares
app.use(cors({origin: true}));
app.use(express.json())

//- API routes
app.get('/',(request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (req, res) =>{
    const total = req.query.total;
    console.log('Payment request recieved for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//- Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-e6023/us-central1/api