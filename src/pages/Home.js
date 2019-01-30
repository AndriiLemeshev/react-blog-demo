import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import {getPosts, POSTS_COUNT} from "../reducers/post";
import PostTeaser from "../components/PostTeaser";

class Home extends Component {

    constructor(props) {
        super(props);

        this.goPrevPage = this.goPrevPage.bind(this);
        this.goNextPage = this.goNextPage.bind(this);
    }

    getPageNum() {
        let pageNum = this.props.match
            && this.props.match.params
            && this.props.match.params.pageNum;
        pageNum = parseInt(pageNum);
        return pageNum ? pageNum : 1;
    }

    componentDidMount() {
        this.props.actions.getPosts(this.getPageNum(), this.props.queryString);
    }

    goToPageNum(num) {
        this.props.actions.goToPageNum(num);
        this.props.actions.getPosts(num, this.props.queryString);
    }

    goPrevPage = () => this.goToPageNum(this.getPageNum() - 1);
    goNextPage = () => this.goToPageNum(this.getPageNum() + 1);

    prevExists() {
        return this.getPageNum() > 1;
    }

    nextExists() {
        return this.props && this.props.posts && this.props.posts.length === POSTS_COUNT;
    }

    render() {
        return (
            <div className={"container my-1"}>
                {this.props.loading ? (<h3>Loading...</h3>) : this.props.posts.map(post => (
                    <PostTeaser key={post.id} post={post}/>
                ))}
                <div>
                    <button className={`btn btn-link ${!this.prevExists() && 'disabled'}`} onClick={this.goPrevPage}>Prev</button>
                    <button className={`btn btn-link ${!this.nextExists() && 'disabled'}`} onClick={this.goNextPage}>Next</button>
                </div>
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
        getPosts,
        goToPageNum: (num) => push(`/page/${num}`)
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);