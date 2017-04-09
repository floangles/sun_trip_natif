import React from 'react';
import { View, Image } from 'react-native';

const TripCard = ({ image }) => {
	return (
		<View>
			<Image
				source={image}
				style={styles.containerStyle}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		alignSelf: 'stretch',
		borderBottomWidth: 1,
		height: 100,
		width: 350,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
	},
};

export { TripCard };
