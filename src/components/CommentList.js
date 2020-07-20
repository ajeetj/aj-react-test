import React from "react";
import Comment from "./Comment"


class CommentList extends React.Component{
    render() {
        return (
            <div>
                {
                    this.props.comments.map(comment => 
                    <Comment key={comment.id} text={comment.text}/>)
                }
            </div>
        );
    }

}


export default CommentList;