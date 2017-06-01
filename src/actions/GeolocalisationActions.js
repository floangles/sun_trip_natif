import { GEOLOCALISATION_UPDATE } from './types';

export const geolocalisationUpdate = ({ prop, value }) => {
	return {
		type: GEOLOCALISATION_UPDATE,
		payload: { prop, value }
	};
};
