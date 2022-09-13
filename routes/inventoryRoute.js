const express=require('express')
const router=express.Router()
let { getInventory, add, getUpdate, update }=require('../controllers/inventory')
router
    .route('/')
    .get(getInventory)



router
    .route('/add')
    .post(add)

router
    .route('/update')
    .get(getUpdate)
    .post(update)

module.exports=router