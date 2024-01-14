import awilix, { asClass, asFunction } from "awilix"
import connectDB from "./mongo.js"

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
  strict: true,
})

container.register({
  mongo: asFunction(connectDB),
})

export default container