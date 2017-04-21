import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LogUserReducer from './LogUserReducer';
import TripsReducer from './TripsReducer';
import TripFormReducer from './TripFormReducer';

export default combineReducers({
	authForm: AuthReducer,
	LogUser: LogUserReducer,
	tripsList: TripsReducer,
	tripForm: TripFormReducer
});
