const mongoose = require('mongoose');
const { generate } = require('random-words');

main()
    .then(() =>{
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema= new mongoose.Schema({
    title:{type:String, required:true,maxlength:20}, 
    author: {type:String},
    price:{type:Number, min:1},
    discount:{type:Number, default:0},
    category:{ type:String, enum:['fiction','non-fiction']},
    genere:[String],
});  

const Book= mongoose.model('Book', bookSchema);

// Book.findByIdAndDelete("6968a3f4ed7585b9cb2b0778").then((res)=>{
  
let book1 =new Book({
    title:"Marvel Comics v2",  
    price:"500",
    genere:["action","adventure"],
});
book1
.save().then(res => {console.log(res)}).catch(err => {console.log(err)});
