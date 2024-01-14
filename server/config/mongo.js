import Mongoose from "mongoose"
import config from "./config.js"

const user = config.DB_USER
const pass = config.DB_PASS
const database = config.DB_NAME

const myDb = `mongodb+srv://${user}:${pass}@${database}/?retryWrites=true&w=majority`
const connectDB = async () => {
  await Mongoose.connect(myDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
export default connectDB