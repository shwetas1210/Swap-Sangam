import express from 'express'
const app = express()
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import userRoute from './routes/user.routes.js'
app.use(cors()) //to connect to backend
app.use(express.json()) //post request ke liye json 
dotenv.config();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const URL=process.env.MongoURL
try {
    mongoose.connect(URL);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
app.use("/user",userRoute)  //these are api endpoints

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})