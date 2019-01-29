import React from 'react';
import {Link} from "react-router-dom";

const teaserLength = 400;

const PostTeaser = (props) => {
    let {id, title, body} = props.post;
    body = body.trim();
    return (
        <div className={"container my-1"}>
            <h3>{title}</h3>
            <div>{body.length > teaserLength ? body.substr(0, teaserLength) + '...' : body}</div>
            <Link to={`/post/${id}`}>More</Link>
        </div>
    )
};

export default PostTeaser;