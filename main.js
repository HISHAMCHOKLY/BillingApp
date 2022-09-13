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

app.get('/',(req,res)=>{
    res.render('home')
})
app.use('/inventory',inveteryRoute)
app.use('/billing',billingRoute)


app.listen(3000,'',()=>{
    console.log("started");
})