import { useState } from "react"
import './CommentBox.css'


export default function CommentBox(){
    let [comments, setComments] = useState([{username: "John Doe", remarks: "Great product!", rating: 5}]);
    return(
        <div>
           <h3>All Comments</h3>
           <div className="comment">
            <span>{comments[0].remarks}</span>
            &nbsp; 
            <span>(rating = {comments[0].rating} stars)</span>
            <p>- {comments[0].username}</p>
           </div>
        </div>
    )
}