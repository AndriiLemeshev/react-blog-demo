import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from "./user";
import post from "./post";

export default (history) => combineReducers({
    router: connectRouter(history),
    user: user,
    post: post
});