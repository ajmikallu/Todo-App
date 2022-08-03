import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
const app = express()
const PORT: string | number = process.env.PORT || 4000
app.use(cors())
app.use(todoRoutes)
const uri: string ='mongodb+srv://ajmi:ajmi@todoapp.i7u9vrz.mongodb.net/?retryWrites=true&w=majority'
const options:Object = { useNewUrlParser: true, useUnifiedTopology: true }


mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })