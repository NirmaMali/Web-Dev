const express = require("express");
const app = express();
// const posts = require("./routes/post.js");
const router = express.Router();


//posts
//Index 
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//Show
router.get("/:id", (req, res) => {
    res.send("GET for show posts id");
});

//POSTs
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//Delete 
router.delete("/:id", (req, res) => {
    res.send("DELETE for posts id");
});

module.exports = router;