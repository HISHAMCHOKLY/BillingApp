let Inventory =require('../models/inventory')
let customerBill=require('../models/customerBillHistory')
let currentBill=require('../models/currentBill')

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
    await currentBill.create({id:Date.now(),itemid:itemid,custname:custname,itemName:itemname,itemQty:itemqty,itemUnitPrice:itemuprice})
    res.redirect('/billing')

}
exports.deleteItem=async(req,res)=>{
    let id=req.params.id
    await currentBill.deleteOne({id:id})
    res.redirect('/billing')

}
exports.clearBill=async(req,res)=>{
    await currentBill.deleteMany()
    res.redirect('/billing')
}