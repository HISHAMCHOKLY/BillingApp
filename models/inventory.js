const mongoose=require('mongoose')
let inventoryschema=new mongoose.Schema({id:String,P_id:String,name:String,catogary:String,qty:Number,pdate:String,uprice:String})
module.exports=mongoose.model('Inventory',inventoryschema)