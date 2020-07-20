import React from "react";

const Comment = (porps) => {
    return (
        <div className="CommentParent">
            <div className="Comment">{porps.text}</div>
        </div>
        
    );
}

export default Comment;