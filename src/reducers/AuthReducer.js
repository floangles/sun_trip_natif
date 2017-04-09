import {
	AUTH_UPDATE,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
 } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE };
		case LOGIN_USER_FAIL:
			return { ...state, error: action.payload, password: '', loading: false };
		default:
			return state;
	}
};
