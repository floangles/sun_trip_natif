import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { authLogOut } from '../actions';
import { Card, CardSection, Button, TripCard } from './common';

class TripsList extends Component {

	componentWillMount() {
		console.log(this.props.user);
		if (!this.props.user) {
      Actions.auth({ type: 'reset' });
    }
	}

	onButtonPress() {
		this.props.authLogOut();
		Actions.auth({ type: 'reset' });
	}

	render() {
		return (
			<Card>
				<TripCard image={require('../resources/voyage.jpg')} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						log out
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({ LogUser }) => {
	const { user } = LogUser;
	return { user };
};

export default connect(mapStateToProps, { authLogOut })(TripsList);
