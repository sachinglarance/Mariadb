const taskDetailsDAO = require('./dao/taskDetailsDAO');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // middleware to parse request body as json

app.get('/', (req, res) => {
  res.send('This is sachin');
});

app.get('/createTask', async (req, res) => {
  let response = {
    code: 200,
    message: "",
    data: null,
}
    try {
      let task = req.query.task;
      const newTask = await taskDetailsDAO.createTask(task);
      if (newTask) {
        response = {
          data: newTask,
            code: 200,
            message: "Task created succefully",
           
        }
    } else {
        response = {
          data: null,
            code: 500,
            message: "Error occurred while creating a specific task",
           
        }
    }
    res.send(response);
} catch (err) {
    console.log("Error occurred in a specific task creating API: ", err);
    response = {
        code: 500,
        message: "Error occurred while creating a specific task",
        data: null,
    }
    res.send(response);
}
});

  app.get('/updateTask', async (req, res) => {
    let response = {
      code: 200,
      message: "",
      data: null,
  }
    try {
      let taskId = req.query.taskId;
      let updateTask = req.query.updateTask;
      const UpdateTask = await taskDetailsDAO.updateTask(taskId,updateTask);
      if (UpdateTask) {
        response = {
          data: UpdateTask,
            code: 200,
            message: "Task updated succefully",
           
        }
    } else {
        response = {
          data: null,
            code: 500,
            message: "Error occurred while updating a task",
           
        }
    }
    res.send(response);
} catch (err) {
    console.log("Error occurred in a task updating API: ", err);
    response = {
        code: 500,
        message: "Error occurred while updating a  task",
        data: null,
    }
    res.send(response);
}
});


  app.get('/deleteTask', async (req, res) => {
    let response = {
      code: 200,
      message: "",
      data: null,
  }
    try {
      let taskId = req.query.taskId;
      const deleteTask = await taskDetailsDAO.deleteTask(taskId);
      if (deleteTask) {
        response = {
          data: deleteTask,
            code: 200,
            message: "Task deleted succefully",
           
        }
    } else {
        response = {
          data: null,
            code: 500,
            message: "Error occurred while deleting a specific task",
           
        }
    }
    res.send(response);
} catch (err) {
    console.log("Error occurred in a specific task deleting API: ", err);
    response = {
        code: 500,
        message: "Error occurred while deleting a specific task",
        data: null,
    }
    res.send(response);
}
});

  app.get('/getTaskbyId', async (req, res) => {
      let response = {
          code: 200,
          message: "",
          data: null,
      }
      try {
        let taskId  = req.query.taskId;
          let idTask = await taskDetailsDAO.getTaskById(taskId);
          if (idTask) {
              response = {
                data: idTask,
                  code: 200,
                  message: "Task fetched succefully",
                 
              }
          } else {
              response = {
                data: null,
                  code: 500,
                  message: "Error occurred while fetching a specific task",
                 
              }
          }
          res.send(response);
      } catch (err) {
          console.log("Error occurred in a specific task fetching API: ", err);
          response = {
              code: 500,
              message: "Error occurred while fetching a specific task",
              data: null,
          }
          res.send(response);
      }
  });


app.get("/getAllTasks", async (req, res) => {
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
