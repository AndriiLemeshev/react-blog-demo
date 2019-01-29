import React from 'react';
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = (props) => {
    const {id, title, body, comments} = props.post;
    return (
        <div className={"container my-1"}>
            <h3>{title}</h3>
            <div>{body}</div>
            <hr/>
            <CommentForm postId={id} />
            <hr/>
            {comments ? comments.map(({timestamp, name, text}) => (
                <Comment key={timestamp} timestamp={timestamp} name={name} text={text}/>
            )) : ''}
        </div>
    );
};

export default Post;