const functions = require('firebase-functions');

const common=require("../common")


//express portion
const express = require('express');
const cors = require('cors');




const app = express();
app.use(cors({ origin: true }));
//app.use(common.decodeIDToken)
///---------------------------------------------------------------

app.post('/CreateProduct', async (req, res) => {
    const Product = require("../Services/Products");
    return Product.Create(req, res);
  })
  



exports.product = functions.runWith({ memory: '128MB' }).region("asia-south1").https.onRequest(app);



// const app3 = express();
// app3.use(cors({ origin: true }));
// app3.use(common.decodeIDTokenForLogin)
// app3.post('/login', async (req, res) => res.json(await common.loginForAdmins(req, res)))
// exports.LoginForAdmin = functions.runWith({ memory: '128MB' }).region("asia-south1").https.onRequest(app3);
