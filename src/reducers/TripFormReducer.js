import { TRIP_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	destination: '',
	start_date: new Date(),
	end_date: new Date(),
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRIP_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
