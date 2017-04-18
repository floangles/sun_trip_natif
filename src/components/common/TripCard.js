import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../common';

const TripCard = ({ image, name, destination, coTriperCount, date }) => {
	const { containerStyle, overlayStyle, nameStyle, commonTextStyle, dateStyle, destinationStyle, triperStyle, iconStyle } = styles;
	return (
		<Card>
			<Image
			// <Image style={styles.imageStyle} source={{ uri: image }} />
				source={{ uri: image }}
				style={containerStyle}
			>
			<View style={overlayStyle} />
			<Text style={{ ...nameStyle, ...commonTextStyle }}>
				{name}
			</Text>
			<Text style={{ ...dateStyle, ...commonTextStyle }}>
				{date}
			</Text>
			<Text style={{ ...destinationStyle }}>
				{destination}
			</Text>
			<Text style={{ ...iconStyle, ...commonTextStyle }}>
				<Icon name="user" size={13} color="#fff" style={iconStyle} />
			</Text>
			<Text style={{ ...triperStyle, ...commonTextStyle }}>
				{coTriperCount}
			</Text>
			</Image>
		</Card>
	);
};

const styles = {
	containerStyle: {
		alignSelf: 'stretch',
		borderBottomWidth: 1,
		height: 200,
		width: null,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#ddd',
		borderRadius: 5
	},
	overlayStyle: {
    flex: 1,
    left: 0,
    top: 0,
    height: 200,
    opacity: 0.1,
		width: null,
    backgroundColor: 'black',
  },
	nameStyle: {
		top: 5,
		left: 5,
	},
	iconStyle: {
		right: 25,
		top: 5,
		fontSize: 13,
	},
	destinationStyle: {
		fontSize: 20,
		backgroundColor: 'transparent',
		borderColor: 'black',
		fontWeight: 'bold',
		color: '#fff',
		textShadowColor: 'black',
		margin: 10,
	},
	triperStyle: {
		right: 10,
		top: 5,
		fontSize: 13,

	},
	dateStyle: {
		left: 5,
		top: 30,
		fontSize: 10,
	},
	commonTextStyle: {
		backgroundColor: 'transparent',
		position: 'absolute',
		fontWeight: 'bold',
		color: '#fff',
		textShadowColor: 'rgb(89, 89, 89)',
		textShadowOffset: { width: 0, height: 1 }
	}
};

export { TripCard };
