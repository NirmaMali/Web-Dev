// getting-started.js
const mongoose = require('mongoose');

main()
    .then(() =>{
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);
// const Employee = mongoose.model('Employee', userSchema);

User.findByIdAndDelete("6968a007ed7585b9cb2b0774").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


// User.findByIdAndUpdate("6968a007ed7585b9cb2b0775", {age:67}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.findById("6968a007ed7585b9cb2b0775").then((res)=>{
//     console.log(res);
// })  .catch((err)=>{
//     console.log(err);
// });


// const user2= new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age:48,
// });
// user2.save().then(res => {console.log(res)}).catch(err => {console.log(err)});

// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com", age:35},
//     {name:"Peter", email:"peter@gmail.com", age:28},
//     {name:"Bruce", email:"bruce@gmail.com", age:40},
// ]).then (res => {console.log(res)}).catch(err => {console.log(err)});

