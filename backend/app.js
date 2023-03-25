const express= require('express');
const bodyParser=require('body-parser')
const cors=require('cors')

const mongoose=require('./db.js')
const app=express()
const router=require('../backend/routes.js');
const route = require('../backend/routes.js');
const { Router } = require('express');

app.use(bodyParser.json())

app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=>{
    console.log('server has started on 3000')
})
app.use('/post',route)
app.use('/contact',route)