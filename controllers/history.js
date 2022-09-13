let history=require('../models/history')

exports.getHistory=async (req,res)=>{
    let data=await history.find()
    res.render('history',{data})
}