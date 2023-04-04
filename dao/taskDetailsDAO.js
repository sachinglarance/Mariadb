const { json } = require('body-parser');
const TaskDetails = require('../module/task_details');


// const createTask = async () => {
//     try {
//         const newOne = await TaskDetails.build(newTask);
//         newOne.save();
//         return JSON.parse(JSON.stringify(newOne));
//     } catch (err) {
//         console.log("Error: ", err);
//         throw err;
//     }
// };

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
    // createTask,
    getAllTasks, 
    
};

