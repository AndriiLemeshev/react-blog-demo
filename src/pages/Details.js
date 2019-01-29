import React, {Component} from 'react';
import Post from "../components/Post";
import {bindActionCreators} from "redux";
import {getPost} from "../reducers/post";
import connect from "react-redux/es/connect/connect";

class Details extends Component{

    componentDidMount() {
        this.props.actions.getPost(this.props.match.params.id);
    }

    render() {
        return (
            <div className={"container my-1"}>
                {(this.props.loading || !this.props.post) ? (<h3>Loading...</h3>) : (
                    <Post post={this.props.post} />
                )}
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    post: state.post.post,
    postId: state.post.postId,
    loading: state.post.loading
});

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getPost
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);