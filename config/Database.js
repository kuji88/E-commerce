const mongoose = require('mongoose')


const DB= ()=>{mongoose.connect(process.env.DATABASE_URL).then((conn)=>{
    console.log(`connection done ${conn.connection.host}`)
}).catch((err)=>{
    console.log(err)
})}

module.exports=DB