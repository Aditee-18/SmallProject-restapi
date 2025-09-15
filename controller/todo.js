const todo=require('../models/todo');

async function handleCreatetodo(req,res) {
    const body=req.body;

    if(!body){
        return res.status(400).json({msg:"todo item required"});
    }

    result=await todo.create({
        Task:body.Task,
        Time:body.Time,
        Completed:body.Completed,
    });

    return res.status(201).json({msg:"task successfully added(created)"});
}

async function handleGetallTask(req,res) { //GET
    const tasks=await todo.find({}); 
    return res.json(tasks);    
}

async function handleGetTaskById(req,res){
    const task=await todo.findById(req.params.id);
    
    if(!task) return res.status(404).json({status:"error",msg:"task not found"});
    return res.json(task);
}

async function handleUpdateTask(req,res) {
    const updatedtask=await todo.findByIdAndUpdate(req.params.id,req.body);

    if(!updatedtask) return res.status(404).json({status:"error",msg:"task not found"});

    return res.json({msg:"successfully updated"});    
}

async function handleDeleteTask(req,res) {
    const id=await todo.findByIdAndDelete(req.params.id);

    if(id===-1) return res.status(500).json({status:"error",msg:"task not deleted"});

    return res.json({msg:"successfully deleted"});
    
}

module.exports={
    handleCreatetodo,
    handleGetallTask,
    handleGetTaskById,
    handleUpdateTask,
    handleDeleteTask,
}
    
