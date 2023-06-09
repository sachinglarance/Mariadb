const TaskDetails = require("../module/task_details");

const createTask = async (data) => {
  try {
    let newOne = await TaskDetails.create({ task_name: data });
    return JSON.parse(JSON.stringify(newOne));
  } catch (err) {
    console.log("Error..: ", err);
  }
};

const updateTask = async (taskId, data) => {
  try {
    let updateOne = await TaskDetails.update({ task_name: data },{
        where: {
          task_id: taskId,
        },
    });
    return JSON.parse(JSON.stringify(updateOne));
  } catch (err) {
    console.log("Error..: ", err);
  }
};

const deleteTask = async (taskId) => {
  try {
    let deleteOne = await TaskDetails.destroy({
      where: {
        task_id: taskId,
      },
    });
    return JSON.parse(JSON.stringify(deleteOne));
  } catch (err) {
    console.log("Error..: ", err);
  }
};

const getTaskById = async (taskId) => {
  try {
    let taskbyId = await TaskDetails.findOne({
      where: {
        task_id: taskId,
      },
    });
    return JSON.parse(JSON.stringify(taskbyId));
  } catch (err) {
    console.log("Error..: ", err);
  }
};

const getAllTasks = async () => {
  try {
    const response = await TaskDetails.findAll();
    return JSON.parse(JSON.stringify(response));
  } catch (err) {
    console.log("Error: ", err);
    throw err;
  }
};

module.exports = {
  createTask: createTask,
  updateTask: updateTask,
  deleteTask: deleteTask,
  getTaskById: getTaskById,
  getAllTasks: getAllTasks,
};
