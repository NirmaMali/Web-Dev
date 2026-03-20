const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Nodewithsql',
    password: 'nirma@230804'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

//inserting new data

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// }





//Home Route
app.get('/', (req, res) => {
    let q = ` select count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });

    }
    catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});


//Show Route
app.get("/user", (req, res) => {

    let q = ` select * from user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;

            res.render("showusers.ejs", { users });
        });

    }
    catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
}
);


//Edit Route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = ` select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });

    }
    catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
}
);

//Update(DB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let {password: formpass,username:newUsername} = req.body;
    let q = ` select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("wrong password");
            }else{
                let q2=`update user SET username='${newUsername}' where id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
           
        });

    }
    catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});



app.listen(8080, () => {
    console.log('Server is running on port 8080');
});




