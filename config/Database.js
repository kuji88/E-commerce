const mongoose = require('mongoose')


const DB= ()=>{mongoose.connect(process.env.DATABASE_URL).then((conn)=>{
    console.log(`connection done ${conn.connection.host}`)
})}

module.exports=DB