import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LogUserReducer from './LogUserReducer';

export default combineReducers({
	authForm: AuthReducer,
	LogUser: LogUserReducer,
});
