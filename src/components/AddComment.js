import React, { useState } from "react";


const AddComment = (props) => {
    
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddComment(commentText);
        setCommentText("");
    }
    
    return (
       <form onSubmit={handleSubmit}>
           <div className="AddCommentParent">
            <textarea className="AddComment" 
                placeholder="Write comment here.." 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}/>
            <button type="submit">Add</button>
           </div>
           
       </form>
    );
}


export default AddComment;