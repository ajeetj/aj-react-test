import React from "react";
import Comment from "./Comment"
import CommentType from "../types/CommentType"

interface Props{
    comments:CommentType[];
}

class CommentList extends React.Component<Props>{
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