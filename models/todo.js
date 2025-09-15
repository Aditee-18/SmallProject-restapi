const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    Task:{
        type:String,
        required:true,
    },
    Time:{
        type:String,
        required:true,
    },
    Completed:{
        type:Boolean,
        required:true,
    }

},{timestamps:true});

const todo=mongoose.model('todo',todoSchema);

module.exports=todo;
