import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getPosts} from "../reducers/post";
import PostTeaser from "../components/PostTeaser";

class Home extends Component {

    componentDidMount() {
        let pageNum = this.props.match
            && this.props.match.params
            && this.props.match.params.pageNum;
        pageNum = pageNum ? pageNum : 1;
        this.props.actions.getPosts(pageNum, this.props.queryString);
    }

    render() {
        return (
            <div className={"container my-1"}>
                {this.props.loading ? (<h3>Loading...</h3>) : this.props.posts.map(post => (
                    <PostTeaser key={post.id} post={post}/>
                ))}
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    posts: state.post.posts,
    pageNum: state.post.pageNum,
    queryString: state.post.queryString,
    loading: state.post.loading
});

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getPosts
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);