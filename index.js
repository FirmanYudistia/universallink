const express = require("express")
const app = express()
const deeplink = require('node-deeplink')
const router= require('./route.js')
const path = require('path')
const  MobileDetect = require('mobile-detect')


app.use('/.well-known',router)
app.get('/',function (req,res){

res.send('hai')
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."))