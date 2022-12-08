const express = require('express') //importing express module with name - express
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 
let cors = require("cors");//middle ware to fix the issue of cross origin request

let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRouter");

let userApp = express();
let userRouter = require("./routes/userRouter");

//setting cors middleware to make our api be public
app.use(cors());

// serve static files like images css using static middleware
app.use("/static", express.static("public"))

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

//localhost:9000/user/savedummy?userName=paribesh
app.use("/user", userApp);
userApp.use("/", userRouter);

app.use("/",defaultRouter);

app.listen(port, ()=> console.log(`server is listing as port ${port}`))