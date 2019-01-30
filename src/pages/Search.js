import React from 'react';
import PostsList from "../components/PostsList";
import connect from "react-redux/es/connect/connect";

const Search = (props) => {
    let pageNum = props.match
        && props.match.params
        && props.match.params.pageNum;
    pageNum = parseInt(pageNum);
    pageNum = pageNum ? pageNum : 1;

    return (
        <div className={"container my-1"}>
            <h3>Search</h3>
            <div>
                <strong>Searching by:</strong> "{props.queryString}"
            </div>
            <PostsList pageNum={pageNum} urlPrefix={'/search'}/>
        </div>
)};

export const mapStateToProps = state => ({
    queryString: state.post.queryString
});

export default connect(mapStateToProps, null)(Search);