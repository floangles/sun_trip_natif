import { LOG_USER, AUTH_LOG_OUT } from '../actions/types';

const INITIAL_STATE = {
	user: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_LOG_OUT:
			return { ...state, ...INITIAL_STATE, user: null };
		case LOG_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
