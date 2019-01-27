import React from 'react';

const Comment = (props) => {
    const date = new Date().toISOString().slice(0,19);
    return (
        <div className={"container mt-1 comment"}>
            <strong className={"mr-2"}>{props.name}</strong><span className={"text-muted"}>{date}</span>
            <p>{props.text}</p>
        </div>
    );
};

export default Comment;