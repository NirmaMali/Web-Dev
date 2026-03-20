const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');

// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts=[
    {
        id:uuidv4(),
        username:"nirma",
        content:"i love coding"
    },
    {
        id:uuidv4(),
        username:"rishiii",
        content:"i'm placed in goggle!!!"
    },
    {
        id:uuidv4(),
        username:"parshuu",
        content:"i'm just a kid"
    },
];

app.get('/posts', (req, res) => {
  res.render("index.ejs",{ posts});
});

app.get('/posts/new', (req, res) => {
  res.render("new.ejs");
});

app.post('/posts', (req, res) => {
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let {id}=req.params;
    let post=posts.find((p) => id ==p.id);
    res.render("show.ejs",{post});
});

app.patch('/posts/:id', (req, res) => {
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p) => p.id===id);
    post.content=newContent;
    res.redirect('/posts');
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => id ==p.id);
    res.render("edit.ejs",{post});
});

app.delete('/posts/:id', (req, res) => {
    let {id}=req.params;
    posts=posts.filter((p) => p.id !==id);
    res.redirect('/posts');
});

app.listen(port, () => {
  console.log(` server running at ${port}`);
});