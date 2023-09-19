const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
//Import Model
const UserModel = require('./models/Users');
const app = express()
const port = 4000
//DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>console.log("Connection established"))
.catch(err => console.error(err));
//DB End 
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

app.get('/display', (req, res) => {
  UserModel.find()
  .then(data => res.json(data))
  .catch(err => console.error(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
