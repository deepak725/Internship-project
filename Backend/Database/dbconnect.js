const mongoose = require('mongoose')

const databaseUrl = process.env['dbUrl']


const ConnectDatabase = async () => {

    try {
 
        await mongoose.connect(databaseUrl,{
          maxPoolSize: 50,
          wtimeoutMS: 2500,
          useNewUrlParser: true,
        })
      console.log("Connect to db successfully")
    } catch (err) {
      console.log("connection failed, erro,r:", err)
    }

}

exports.connectDatabase = ConnectDatabase;