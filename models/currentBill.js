const mongoose=require('mongoose')
let currentBillschema=new mongoose.Schema({id:String,itemid:String,custname:String,itemName:String,itemQty:Number,itemUnitPrice:Number,date:String,time:String})
module.exports=mongoose.model('currentBill',currentBillschema)