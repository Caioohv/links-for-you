import Mongoose from "mongoose"
import dotenv from "dotenv"

const user = dotenv.config().parsed.DB_USER
const pass = dotenv.config().parsed.DB_PASS

const myDb = `mongodb+srv://${user}:${pass}@cluster0.h7mxi13.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
  await Mongoose.connect(myDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
export default connectDB