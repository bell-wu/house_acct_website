const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

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
const usersRouter = require('./routes/users');

app.use('/purchase', purchaseRouter);
app.use('/users', usersRouter);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
