const express=require('express');
const todorouter=require('./routes/todo');
const {connectMongodb}=require('./connection')
const PORT=5000;

const app=express();
connectMongodb("mongodb://127.0.0.1:27017/Todolist");
app.use(express.urlencoded({extended:false}));

app.use('/todo',todorouter);

app.listen(PORT,()=>{console.log(`server started at http://localhost:${PORT}`)});
