require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const serivceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");



const corsOptions = {
    origin:"http://localhost:5173",
    methods: "GET, POST, PATCH, PUT, HEAD,DELETE",
    Credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serivceRoute);

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);


// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome to Admin Panel");
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("Welcome to Admin Panel Registeration page");
// });

const PORT = 8080;

connectDb().then(()=>{
app.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
});
})