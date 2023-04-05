const sequelize = require("./config/database");
const taskDetailsDAO = require('./dao/taskDetailsDAO');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // middleware to parse request body as json

app.get('/', (req, res) => {
  res.send('This is sachin');
});

app.get('/createTask', async (req, res) => {
    try {
      let task = {
        task_name: "sachin",
      };
      const newTask = await taskDetailsDAO.createTask(task);
      res.send({
        data : newTask,
        message: 'Task created successfully',
        status: 201
      });
    } catch (err) {
      console.error("Error occurred while creating task: ", err);
      res.status(500).send("An error occurred while creating task. Please try again later.");
    }
  });

  app.get('/updateTask', async (req, res) => {
    try {
      let taskId = req.query.taskId;
      let updateTask = {
        task_name: "sachincharles",
      };
      const UpdateTask = await taskDetailsDAO.updateTask(taskId,updateTask);
      res.send({
        data : UpdateTask,
        message: "Task updated succefully",
        status: 201
      });
    } catch (err) {
      console.error("Error occurred while creating task: ", err);
      res.status(500).send("An error occurred while creating task. Please try again later.");
    }
  });


  app.get('/deleteTask', async (req, res) => {
    try {
      let taskId = req.query.taskId;
      const deleteTask = await taskDetailsDAO.deleteTask(taskId);
      res.send({
        data : deleteTask,
        message: 'Task deleted successfully',
        status: 201
      });
    } catch (err) {
      console.error("Error occurred while creating task: ", err);
      res.status(500).send("An error occurred while creating task. Please try again later.");
    }
  });

  app.get('/getTaskbyId', async (req, res) => {
    try {
        let taskId = req.query.taskId;
        const idTask = await taskDetailsDAO.getTaskById(taskId);
        res.send({
          data : idTask,
          message: 'Task fetched successfully',
          status: 201
        });
    } catch (err) {
      console.error("Error occurred while fetching tasks: ", err);
      res.status(500).send("An error occurred while fetching tasks. Please try again later.");
    }
  });


app.get('/getAllTasks', async (req, res) => {
  try {
    const tasks = await taskDetailsDAO.getAllTasks();
    res.send({
      data: tasks,
      message: 'Tasks retrieved successfully',
      status: 200
    });
  } catch (err) {
    console.error("Error occurred while fetching tasks: ", err);
    res.status(500).send("An error occurred while fetching tasks. Please try again later.");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
