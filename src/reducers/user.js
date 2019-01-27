import {userAPI} from "../api/user";

export const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
export const LOGIN = 'user/LOGIN';
export const LOGOUT ='user/LOGOUT';

const initialState = {
    profile: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case LOGIN:
            return {
                ...state,
                profile: action.name,
                loading: false
            };

        case LOGOUT:
            return {
                ...state,
                profile: null
            };

        default:
            return state
    }
};

export const login = (name, password) => dispatch => {
    dispatch({
        type: LOGIN_REQUEST
    });

    userAPI
        .read(name, password)
        .then(({name}) => dispatch({type: LOGIN, name: name}));
};

export const logout = () => dispatch => dispatch({type: LOGOUT});