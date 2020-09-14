const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', ()=> {
  console.log("MongoDB connection established successfully");
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const purchaseRouter = require('./routes/purchase');

app.use('/purchase', purchaseRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});