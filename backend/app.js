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
//Add API
app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(data => res.json({flag:1,msg:'success',mydata:data}))
    .catch(err => console.error(err));
});
//Display API
app.get('/display', (req, res) => {
  UserModel.find()
  .then(data => {
    if(data.length > 0) {
      res.json({flag:1,msg:'success',mydata:data});
    }else{
      res.json({flag:0,msg:'No Record Found'})
    }
  })
  .catch(err => console.error(err));
});
//Delete API
app.delete('/delete/:id', (req, res) => {
  UserModel.findByIdAndRemove(req.params.id)
  .then(data => res.json({flag:1,msg:'Record deleted'}))
  .catch(err => console.error(err));
});
//Edit API
app.get('/edit/:id', (req, res) => {
  UserModel.findById(req.params.id)
  .then(data => {
    console.log(data);
    res.json({flag:1,msg:'Record found',mydata:data})
  })
  .catch(err => console.error(err));
});
//Update
app.put('/update/:id', (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body)
  .then(data => {
    console.log(data);
    res.json({flag:1,msg:'Record Updated',mydata:data})
  })
  .catch(err => console.error(err));
});
//Login API
app.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  UserModel.findOne({email:email})
  .then(mydata =>{
    if(mydata){
      if(mydata.password == password)
      {
        res.json({flag:1,msg:'success',mydata:mydata});
      }else{
        res.json({flag:0,msg:'Failed'});
      }
    }else{
      res.json({flag:0,msg:'NO Record Found'});
    }
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
