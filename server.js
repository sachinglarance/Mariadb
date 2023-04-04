const sequelize = require("./config/database");
const taskDetailsDAO = require('./dao/taskDetailsDAO');
const express = require('express');
const task_details = require("./module/task_details");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is sachin');
});

// app.get('/createTask', async (req, res) => {
//   try {
//     const newTask = {
//       task_name : 'sachincharles'
//     }
//     const tasks = await taskDetailsDAO.createTask(newTask);
//     res.send(tasks);
//   } catch (err) {
//     console.error("Error occurred while fetching tasks: ", err);
//     res.status(500).send("An error occurred while fetching tasks. Please try again later.");
//   }
// });

app.get('/getAllTasks', async (req, res) => {
  let response = {
    code: 200,
    message: "",
    data: null,
}
try {
    let tasks = await taskDetailsDAO.getAllTasks();
    if (tasks) {
        response = {
            code: 200,
            message: "Task fetched succefully",
            data: tasks,
        }
    } else {
        response = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
    }
    res.send(response);
} catch (err) {
    console.log("Error occurred in all tasks fetching API: ", err);
    response = {
        code: 500,
        message: "Error occurred while fetching all tasks",
        data: null,
    }
    res.send(response);
}
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
