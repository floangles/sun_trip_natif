import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, placeholder, onChangeText, secureTextEntry }) => {

	const { input, container } = styles;

	return (
		<View style={container}>
			<TextInput
			style={input}
			secureTextEntry={secureTextEntry}
			placeholder={placeholder}
			autoCorrect={false}
			value={value}
			onChangeText={onChangeText}
			blurOnSubmit
			/>
		</View>

	);
};


const styles = {
	input: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
		backgroundColor: '#eeeff1'
	},
	container: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	}
};

export { Input };
