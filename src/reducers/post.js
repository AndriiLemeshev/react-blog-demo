import { find, read, addComment, create, update, remove } from "../api/post";

export const GET_POSTS_LIST_REQUEST = 'post/GET_POSTS_LIST_REQUEST';
export const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
export const GET_POST_REQUEST = 'post/GET_POST_REQUEST';
export const GET_POST = 'post/GET_POST';

export const ADD_COMMENT_TO_POST = 'post/ADD_COMMENT_TO_POST';

export const CREATE_POST_REQUEST = 'post/CREATE_POST_REQUEST';
export const CREATE_POST = 'post/CREATE_POST';
export const UPDATE_POST_REQUEST = 'post/UPDATE_POST_REQUEST';
export const UPDATE_POST = 'post/UPDATE_POST';
export const REMOVE_POST_REQUEST = 'post/REMOVE_POST_REQUEST';
export const REMOVE_POST = 'post/REMOVE_POST';


export const POSTS_COUNT = 1;

const initialState = {
    posts: [],
    pageNum: 1,
    queryString: null,
    post: null,
    postId: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LIST_REQUEST:
            return {
                ...state,
                posts: [],
                pageNum: action.pageNum,
                queryString: action.queryString,
                loading: true
            };

        case GET_POSTS_LIST:
            return {
                ...state,
                posts: action.posts,
                pageNum: action.pageNum,
                queryString: action.queryString,
                loading: false
            };

        case GET_POST_REQUEST:
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                post: null,
                postId: action.postId,
                loading: true
            };

        case CREATE_POST_REQUEST:
        case UPDATE_POST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case GET_POST:
        case CREATE_POST:
        case UPDATE_POST:
            return {
                ...state,
                post: action.post,
                postId: action.postId,
                loading: false
            };

        default:
            return state
    }
};

export const getPosts = (pageNum = 1, queryString = '') => dispatch => {
    dispatch({
        type: GET_POSTS_LIST_REQUEST,
        pageNum: pageNum,
        queryString: queryString,
    });

    find(pageNum, queryString, POSTS_COUNT)
        .then(posts => dispatch({
            type: GET_POSTS_LIST,
            pageNum: pageNum,
            queryString: queryString,
            posts: posts
        }));
};

export const getPost = (postId) => dispatch => {
    dispatch({
        type: GET_POST_REQUEST,
        postId
    });

    read(postId)
        .then(post => dispatch({
            type: GET_POST,
            postId,
            post
        }));
};

export const addCommentToPost = (postId, name, text) => dispatch => {
    dispatch({type: ADD_COMMENT_TO_POST});
    return addComment(postId, name, text)
        .then(post => dispatch({
            type: GET_POST,
            postId,
            post
        }));
};

export const createPost = post => dispatch => {
    dispatch({type: CREATE_POST_REQUEST});

    return create(post)
        .then(post => dispatch({
            type: CREATE_POST,
            postId: post.id,
            post
        }))
};

export const updatePost = post => dispatch => {
    dispatch({type: UPDATE_POST_REQUEST});

    return update(post)
        .then(post => dispatch({
            type: UPDATE_POST,
            postId: post.id,
            post
        }))
};

export const removePost = id => dispatch => {
    dispatch({type: REMOVE_POST_REQUEST});

    return remove(id).then(() => dispatch({type: REMOVE_POST}))
};