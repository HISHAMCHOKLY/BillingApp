const express=require('express')
const { getProducts, getBillpage, addProduct, clearBill, deleteItem } = require('../controllers/billing')
const router=express.Router()



router
    .route('/')
    .get(getBillpage)
router
    .route('/item')
    .get(getProducts)
    .post(addProduct)
router
    .route('/clear')
    .get(clearBill)

router
    .route('/:id')
    .get(deleteItem)    


module.exports=router