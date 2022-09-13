require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const session = require('express-session');
// const MemoryStore = require('memorystore')(session);
// var cookieSession = require('cookie-session')
const date = require('date-and-time');

// const bodyParser = require('body-parser')
const flash = require('connect-flash');

const path = require("path");
const app = express();


const pool = require("./config/database");
// const usersRouter = require("./routes/users")
const dashboardRouter = require("./routes/dashboard");
const customersRouter = require("./routes/customers");
const employeesRouter = require("./routes/employees");
const attendanceRouter = require("./routes/attendance");
const salaryRouter = require("./routes/salary");
const visitorsRouter = require("./routes/visitors");
const followupRouter = require("./routes/followup");
const authRouter = require("./routes/auth");
const subscriptionRouter = require("./routes/subscriptions")
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')

app.use(flash());
const router = express.Router()
const now = new Date();
const value = date.format(now, 'YYYY/MM/DD HH:mm:ss');
// console.log("current date and time : " + value)
//-momery unleaked---------
app.set('trust proxy', 1);
module.exports.handler = serverless(app)
app.use('/.netlify/functions/api', router)

const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    name: 'myCookie',
    cookie: { maxAge: oneDay },
    secret: "app",
    name: "app",
    resave: true,
    saveUninitialized: true,
    unset: 'destroy'
    // cookie: { maxAge: 6000 } /* 6000 ms? 6 seconds -> wut? :S */
  })
);

app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();

});

// app.use("/users", checkLoggedIn, usersRouter);
// app.use(request.flash({ sessionKeyName: 'flashMessage' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.set('view engine', 'html');

app.set("view engine", "ejs");



app.use(session({secret: 'ssshhhhh'}));
app.use("/gym-software",authRouter)
// app.use("/users", checkLoggedIn, usersRouter);
app.use("/", authRouter)
app.use("/dashboard", dashboardRouter)
app.use("/customers", customersRouter)
app.use("/employees", employeesRouter)
app.use("/attendance", attendanceRouter)
app.use("/subscriptions", subscriptionRouter)
app.use("/salary", salaryRouter)
app.use("/visitors", visitorsRouter)
app.use("/followup", followupRouter)
app.get("/data",(req,res)=>{
  console.log(res);
  var getData = "Select * from banner"
  pool.query(getData,(err,result)=>{

    
    if (err) throw err
    return result;
    // console.log("image");
  })
  res.send("Imageeee")
})

app.use("/login", authRouter)
app.use("/logout", authRouter)
app.use(express.json());
if (pool) {
  console.log("Connection Success");
} else {
  console.log("Cant connect to db, Check ur db connection");
}

app.listen(process.env.APP_PORT || 8000, () => {
  
  console.log("Server is running at port 8000..", process.env.APP_PORT);
});

