import React from "react";

interface Props{
    text: string;
}

const Comment = (porps: Props) => {
    return (
        <div className="CommentParent">
            <div className="Comment">{porps.text}</div>
        </div>
        
    );
}

export default Comment;