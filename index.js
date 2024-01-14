import setup from "./server/config/express.js"
import express from "express"
import config from "./server/config/config.js"


const app = express()
setup(app)

const port = config.PORT || 3000

app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})



