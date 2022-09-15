let Inventory =require('../models/inventory')
let customerBill=require('../models/customerBillHistory')
let currentBill=require('../models/currentBill')
let history=require('../models/history')
const inventory = require('../models/inventory')

exports.getBillpage=async(req,res)=>{
    let currentdata=await currentBill.find()
    let grandTotal=0
    let custname
    currentdata.forEach((x)=>{
        let total=x.itemUnitPrice * x.itemQty
        grandTotal+=total
        custname=x.custname
    })
    res.render('billing',{currentdata,grandTotal,custname})
}
exports.getProducts=async(req,res)=>{
    let data=await Inventory.find()
    res.json({data})

}
exports.addProduct=async(req,res)=>{
    let {custname,itemid,itemname,itemqty,itemuprice}=req.body
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    await currentBill.create({id:Date.now(),itemid:itemid,custname:custname,itemName:itemname,itemQty:itemqty,itemUnitPrice:itemuprice,date:current_date,time:current_time})
    await history.create({id:Date.now(),itemid:itemid,custname:custname,itemName:itemname,itemQty:itemqty,itemUnitPrice:itemuprice,date:current_date,time:current_time})
    let updateinv=await inventory.findOne({itemid:itemid})
    updateinv.qty-=itemqty
    await updateinv.save()
    res.redirect('/billing')

}
exports.deleteItem=async(req,res)=>{
    let {time,itemid,qty}=req.params
    let updateinv=await inventory.findOne({itemid:itemid})
    updateinv.qty+=parseInt(qty)
    await updateinv.save()
    await currentBill.deleteOne({time:time})
    await history.deleteOne({time:time})
    res.redirect('/billing')

}
exports.clearBill=async(req,res)=>{
    await currentBill.deleteMany()
    res.redirect('/billing')
}