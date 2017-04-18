import { Actions } from 'react-native-router-flux';
import { HTTP } from '../http-common';
import {
	AUTH_UPDATE,
	LOGIN_USER,
	LOGIN_USER_FAIL,
	LOGIN_USER_SUCCESS,
	AUTH_LOG_OUT,
	LOG_USER
} from './types';
import { REGISTER_USER } from '../Network';


export const authUpdate = ({ prop, value }) => {
	return {
		type: AUTH_UPDATE,
		payload: { prop, value }
	};
};

export const authLogOut = () => {
	return {
		type: AUTH_LOG_OUT,
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		HTTP.post(REGISTER_USER, {
			email,
			password,
		})
		.then(user => loginUserSuccess(dispatch, user))
		.catch((error) => loginUserFail(dispatch, error.message));
	};
};

const loginUserFail = (dispatch, error) => {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: error
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOG_USER,
		payload: user
	});
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
	Actions.main();
};
