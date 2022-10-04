require('dotenv').config()
const express=require('express')
const app=express()
 
const connectDb=require('./config/database')
connectDb()

app.set('view engine','ejs')
app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

let inveteryRoute=require('./routes/inventoryRoute')
let billingRoute=require('./routes/billingRoute')
let historyRoute=require('./routes/historyRoute')
app.get('/',(req,res)=>{
    res.render('home')
})
app.use('/inventory',inveteryRoute)
app.use('/billing',billingRoute)
app.use('/history',historyRoute)


app.listen(process.env.PORT,'',()=>{
    console.log("started");
})