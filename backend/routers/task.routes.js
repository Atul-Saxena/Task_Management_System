import express from "express";
import { createTask, getAllTasks, getOneTask, updateTask, deleteTask, getmytasks } from '../controllers/task.controller.js';

const router = express.Router();

router.get("/allTasks", getAllTasks);
router.get("/getmytasks/:id", getmytasks); //pass user id as params
router.get("/getonetask/:id", getOneTask); //pass task id as params
router.post("/createTask", createTask); //pass data in body
router.put("/update/:id", updateTask); //pass task id as params and data in body
router.delete("/delete/:id", deleteTask);//pass task id as params

export default router;