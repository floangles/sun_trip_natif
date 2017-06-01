import { Actions } from 'react-native-router-flux';
import { HTTP } from '../http-common';

import { TRIPS_FETCH_SUCCESS, TRIP_UPDATE, TRIP_CREATE_SUCCESS } from './types';
import { FETCH_TRIPS_URL, CREATE_TRIP_URL } from '../Network';

export const tripUpdate = ({ prop, value }) => {
	return {
		type: TRIP_UPDATE,
		payload: { prop, value }
	};
};

export const tripsFetch = () => {
  return (dispatch, getState) => {
		setTokenToHeader(getState);
		HTTP.get(FETCH_TRIPS_URL)
			.then(trips => fetchUserSuccess(dispatch, trips.data))
			.catch(() => Actions.auth({ type: 'reset' }));
  };
};

export const tripCreate = ({ name, destination, start_date, end_date }) => {
	return (dispatch, getState) => {
		setTokenToHeader(getState);
		HTTP.post(CREATE_TRIP_URL, {
			name,
			destination,
			start_date,
			end_date
		})
			.then(trip => createTripSuccess(dispatch, trip.data));
	};
};

const createTripSuccess = (dispatch, trip) => {
	dispatch({
		type: TRIP_CREATE_SUCCESS,
		payload: trip
	});
	Actions.tripslist({ type: 'reset' });
};

const fetchUserSuccess = (dispatch, trips) => {
	dispatch({
		type: TRIPS_FETCH_SUCCESS,
		payload: trips
	});
};

const setTokenToHeader = (getState) => {
	if (getState().LogUser.user) {
		HTTP.defaults.headers.common["Authorization"] = getState().LogUser.user.data.auth_token;
	}
};

