import {read} from "../api/user";

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

    return read(name, password)
        .then(user => {
            if (user) {
                dispatch({type: LOGIN, name: user.name});
            } else {
                dispatch({type: LOGIN, name: null});
            }

            return !!user;
        });
};

export const logout = () => dispatch => dispatch({type: LOGOUT});