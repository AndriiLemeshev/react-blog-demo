import React from 'react';
import PostsList from "../components/PostsList";

const Home = (props) => {
    let pageNum = props.match
        && props.match.params
        && props.match.params.pageNum;
    pageNum = parseInt(pageNum);
    pageNum = pageNum ? pageNum : 1;

    return (
        <div className={"container my-1"}>
            <PostsList pageNum={pageNum} urlPrefix={'/page'}/>
        </div>
    );
};

export default Home;