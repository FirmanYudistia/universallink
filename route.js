const router = require('express').Router()
const file =require('./')
const path= require('path')

router.get('/apple-app-site-association',function (req,res){
    res.sendFile(path.join(__dirname, './apple-app-site-association'));
      
})

router.get('/assetlinks.json',function (req,res){
    res.sendFile(path.join(__dirname,'./assetlinks.json'))
})

module.exports = router