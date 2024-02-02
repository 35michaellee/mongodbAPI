// mongodb+srv://michaelleeesparza:<password>@cluster0.nezzbkf.mongodb.net/
// HvEsPm51zZOkPocp
// // Replace <password> with the password for the michaelleeesparza user.
// // When entering your password, make sure that any special characters are URL encoded.

import  express from 'express';
import  dotenv from "dotenv";
dotenv.config();
//import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import grades from "./Routes/grades.mjs";

const PORT=process.env.PORT||5050;
const app= express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to the app")
  //res.status(500).send("seems like we have something messed up");
});
app.use("/grades",grades)

app.listen(PORT,()=>{
    console.log(`Listening on port :${PORT}`);
})
