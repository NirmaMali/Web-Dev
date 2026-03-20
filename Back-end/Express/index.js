const express = require('express');
const app = express();



const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT} `);
});

// app.use((req, res) => {
//     // console.log(req);

//     console.log("request receiced");
//    code= "<h1>Hello</h1> <ul> <li>Mango</li> <li>Apple</li> <li>Banana</li> </ul>";
//    res.send(code);
// });


app.get("/", (req, res) => {
    console.log("request receiced for home page");
   code= "<h1>Hello from Home Page</h1> <ul> <li>Mango</li> <li>Apple</li> <li>Banana</li> </ul>";
   res.send(code);
});

// app.get("/about", (req, res) => {
//     console.log("request receiced for about page");
//    code= "<h1>Hello from About Page</h1><h2> i am abput</h2> <p>This is the about page of our website.</p>";
//    res.send(code);
// });
// app.get("/contact", (req, res) => {
//     console.log("request receiced for contact page");
//    code= "<h1>Hello from Contact Page</h1> <p>This is the contact page of our website.</p>";
//    res.send(code);
// });

// app.get("/profile", (req, res) => {
//     console.log("request receiced for profile page");
//    code= "<h1>Hello from Profile Page</h1> <p>This is the profile page of our website.</p>";
//    res.send(code);
// });

// app.get( (req, res) => {
//     res.send("this page does not exist on this server");
// });

// app.post("/", (req, res) => {
//     res.send("You sent a post request to root" );
// });

app.get("/:username/:id",(req, res) => {
    let {username, id} = req.params;
    console.log(`username is ${username} and id is ${id}`);
    res.send("helloo");
});

app.get("/search", (req, res)=> {
    let {q}=(req.query);
    if(!q){
        res.send("No search query provided");
        return;
    }
    res.send(`You searched for ${q}`);
});
