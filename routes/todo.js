const express=require('express');
const {handleDeleteTask,handleCreatetodo,handleGetallTask,handleGetTaskById,handleUpdateTask} = require('../controller/todo');

const router=express.Router();

router.route('/')
.post(handleCreatetodo)
.get(handleGetallTask)

router.route('/:id')
.get(handleGetTaskById)
.patch(handleUpdateTask)
.delete(handleDeleteTask)

module.exports=router;