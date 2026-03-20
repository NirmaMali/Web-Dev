const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

// app.use( (req, res,next) =>{
  
//     console.log("Hi, I am first middleware");
//     next();
// });

// app.use( (req, res,next) =>{
//     console.log("Hi, I am second middleware");
//     next(); 
// });


// logger middleware - morgan
// app.use( (req, res,next) =>{
//   req.responseTime = new Date(Date.now()).toString();
//   console.log(req.method, req.path, req.responseTime, req.hostname);
//   next();

// });

app.use("/random", (req, res, next) => {
  console.log("Hi, I am random middleware");
  next();
});

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if(token === "giveaccess"){
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};



app.get("/api", checkToken, (req, res) => {
  res.send("this is api page");
});



app.get('/', (req, res) => {
  res.status(404).send("Hi , I am root.");
});

app.get('/random', (req, res) => {
  res.send("this is a random page");
});

app.get("/err", (req, res) => {
  abcd=abcd;
});

app.get("/admin",(req, res) => {
  throw new ExpressError(403, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
 let { status=500, message="some err occured" } = err;

  res.status(status).send(message);
});


// app.use((req,res)=>{
//   res.send("page not found"); 
// });

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});