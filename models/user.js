const db = require("../config/MySQLDAO.js");
const userModel ={
    createUser (user)
    {
        const con =  db.getConnection();
       
        const sql = `INSERT INTO user (firstName,lastName,gender,email,username,password)
        VALUES('${user.firstName}','${user.lastName}','${user.gender}','${user.email}','${user.username}','${user.password}')`;
        con.query(sql,(err,results,feilds)=>{
        if(!err)
        {
            console.log(`yay, we inserted data into the database`);
        }
    },
    getUser(id)
    {
        const con =  db.getConnection();
       
        const sql = `SELECT * FROM user WHERE id=${id}`;
        con.query(sql,(err,results,feilds)=>{
        if(!err)
        {
            console.log(`yay, we inserted data into the database`);
        }
    },
    deleteUser()
    {
        
    }
}

module.exports = userModel;