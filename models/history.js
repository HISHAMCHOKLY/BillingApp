const mongoose=require('mongoose')
let historyschema=new mongoose.Schema({id:String,itemid:String,custname:String,itemName:String,itemQty:Number,itemUnitPrice:Number,date:String,time:String})
module.exports=mongoose.model('history',historyschema)