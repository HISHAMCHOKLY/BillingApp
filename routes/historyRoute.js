const express=require('express')
const { getHistory } = require('../controllers/history')
const router=express.Router()


router
    .route('/')
    .get(getHistory)


module.exports=router
