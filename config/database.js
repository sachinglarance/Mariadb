const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('todo','root','root@12',{
    dialect: 'mariadb',
    host: 'localhost'
});

sequelize.authenticate().then(()=>{
    console.log("Connection Established Succesfully");
})
.catch((error)=>{
    console.log(error);
    console.log("Error in Connection")
});

module.exports = sequelize;