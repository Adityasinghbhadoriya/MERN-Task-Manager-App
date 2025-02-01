const express = require("express");
const app = express();
require('dotenv').config(); 
require("./Models/db")
const TaskRouter = require("./Routes/TaskRouter");
const PORT = process.env.PORT || 8080;
const cors = require('cors');
app.use(cors());

app.use(express.json());  

app.get("/", (req,res) =>{
    res.send("Hello from the server");
})

app.use("/tasks", TaskRouter); 

app.listen(PORT, () =>{
    console.log(`Server is running on PORT = ${PORT}`);
})