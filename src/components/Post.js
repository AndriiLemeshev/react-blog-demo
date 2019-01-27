import React from 'react';
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = (props) => (
    <div className={"container my-1"}>
        <h3>{props.title}</h3>
        <div>{props.body}</div>
        <hr/>
        <CommentForm/>
        <hr/>
        {props.comments.map(({timestamp, name, text}) => (
            <Comment key={timestamp} timestamp={timestamp} name={name} text={text}/>
        ))}
    </div>
);

export default Post;