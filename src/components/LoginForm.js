import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image, View } from 'react-native';
import { authUpdate, loginUser } from '../actions';
import { getStoredState } from 'redux-persist';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size='large' />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		const { errorStyle, imageContainer, image } = styles;
		return (
			<Card>
					<View style={imageContainer}>
					<Image
						source={require('../resources/trip.jpg')}
						style={image}
					/>
					</View>
				<CardSection>
					<Input
					placeholder='email'
					value={this.props.email}
					onChangeText={value => this.props.authUpdate({ prop: 'email', value })}
					/>
				</CardSection>
				<CardSection>
						<Input
						placeholder='Password'
						value={this.props.password}
						secureTextEntry
						onChangeText={value => this.props.authUpdate({ prop: 'password', value })}
						/>
				</CardSection>
				<Text style={errorStyle}>
					{this.props.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	imageContainer: {
		margin: 30,
	},
	image: {
		alignSelf: 'center',
		borderRadius: 10,
    width: 100,
    height: 100
	}

};

const mapStateToProps = ({ authForm }) => {
	const { email, password, error, loading, user } = authForm;
	return { email, password, error, loading, user };
};

export default connect(mapStateToProps, { authUpdate, loginUser })(LoginForm);

