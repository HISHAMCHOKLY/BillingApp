const inventory = require('../models/inventory')
let Inventory =require('../models/inventory')

exports.getInventory=async (req,res)=>{
    let data=await Inventory.find()
    res.render('inventory',{data})
}

exports.add=async(req,res)=>{
    let {p_id,pname,pcatogory,pqty,pdate,uprice}=req.body
    await inventory.create({id:Date.now(),P_id:p_id,name:pname,catogary:pcatogory,qty:pqty,pdate:pdate,uprice:uprice})
    res.redirect('/inventory')
}


exports.getUpdate=async(req,res)=>{
    let data=await Inventory.find()
    res.json({data})
}
exports.update=async(req,res)=>{
    let {id,update,uprice,upqty}=req.body
    let updata=await inventory.findOne({id:id})
    updata.pdate=update
    updata.uprice=uprice

    updata.qty+=parseInt(upqty)
    updata.save()
    res.redirect('/inventory')

}
exports.deleteTodo=async(req,res)=>{
    let id=req.params.id
    await Todo.deleteOne({id:id})
    res.redirect('/todo')
}

exports.updateTodo=async (req,res)=>{
    let {update,id}=req.body
    let updatedata= await Todo.findOne({id:id})
    updatedata.text=update
    await updatedata.save()
    res.redirect('/todo')
}