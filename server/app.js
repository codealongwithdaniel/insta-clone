const express = require('express');
const app = express();
const path = require('path');
const keys = require('./config/keys');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/insta-clone', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', function(){
  console.log('Connected');
});

app.use('/api/v1', routes);

app.listen(keys.host,()=>{
    console.log('Running at',keys.host);
})