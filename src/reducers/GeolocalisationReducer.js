import { GEOLOCALISATION_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	localisation: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GEOLOCALISATION_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
