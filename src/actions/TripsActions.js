import { Actions } from 'react-native-router-flux';
import { HTTP } from '../http-common';

import { TRIPS_FETCH_SUCCESS, TRIP_UPDATE } from './types';
import { FETCH_TRIPS_URL } from '../Network';

export const tripUpdate = ({ prop, value }) => {
	return {
		type: TRIP_UPDATE,
		payload: { prop, value }
	};
};

export const tripsFetch = () => {
  return (dispatch, getState) => {
		if (getState().LogUser.user) {
			HTTP.defaults.headers.common["Authorization"] = getState().LogUser.user.data.auth_token;
		}
		HTTP.get(FETCH_TRIPS_URL)
			.then(trips => fetchUserSuccess(dispatch, trips.data));
  };
};

const fetchUserSuccess = (dispatch, trips) => {
	dispatch({
		type: TRIPS_FETCH_SUCCESS,
		payload: trips
	});
};
