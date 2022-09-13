const mongoose=require('mongoose')
let customerBillschema=new mongoose.Schema({id:String,customerName:String,customerNumber:String,items:Array,billdate:String})
module.exports=mongoose.model('customerBill',customerBillschema)