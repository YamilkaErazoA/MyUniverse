const mongoose = require('mongoose')

//this was not in the example:
//require('dotenv').config({path: './config.env'})


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://yamilka:yamilka30@cluster0.p9depib.mongodb.net/DByamilka?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
