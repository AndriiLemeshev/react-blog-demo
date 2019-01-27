import React from 'react';

const teaserLength = 400;

const PostTeaser = (props) => {
    let body = props.body.trim();
    return (
        <div className={"container my-1"}>
            <h3>{props.title}</h3>
            <div>{body.length > teaserLength ? body.substr(0, teaserLength) + '...' : body}</div>
            <button>More</button>
        </div>
    )
};

export default PostTeaser;