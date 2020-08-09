const mysql = require("mysql2");
const db =
{
    conn:"",
    getConnection()
    {
        const connection = mysql.createConnection({
            host : `${process.env.HOST}`,
            user : `${process.env.USER_NAME}`,
            port : `${process.env.PORT_NO}`,
            password : `${process.env.PASSWORD}`,
            database : `${process.env.DATABASE}`,
        });

        return connection;
    },
    connectToDB()
    {
        this.conn = this.getConnection();
        
        console.log(typeof this.conn);

        this.conn.connect((err)=>{
            if(!err)
            {
                console.log(typeof this.conn);
                console.log("done!");
                return conn;
            }
            else
            {
                console.log(`${err} problemsss`);
                return err;
            }
        })
    }
}


module.exports = db;