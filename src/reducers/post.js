import { postAPI } from "../api/post";

export const GET_POSTS_REQUEST = 'post/GET_POSTS_REQUEST';
export const GET_POSTS = 'post/GET_POSTS';

export const POSTS_COUNT = 5;

const initialState = {
    posts: [],
    pageNum: 1,
    postsCount: POSTS_COUNT,
    queryString: '',
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                posts: [],
                pageNum: action.pageNum,
                postsCount: action.postsCount,
                queryString: action.queryString,
                loading: true
            };

        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
                pageNum: action.pageNum,
                postsCount: action.postsCount,
                queryString: '',
                loading: false
            };

        default:
            return state
    }
};

export const getPosts = (pageNum = 1, queryString = '', postsCount = POSTS_COUNT) => dispatch => {
    dispatch({
        type: GET_POSTS_REQUEST,
        pageNum: pageNum,
        postsCount: postsCount,
        queryString: queryString,
    });

    postAPI
        .find(pageNum, postsCount, queryString)
        .then(posts => dispatch({
            type: GET_POSTS,
            pageNum: pageNum,
            postsCount: postsCount,
            queryString: queryString,
            posts: posts
        }));
};