import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { authLogOut, tripsFetch } from '../actions';
import { Card, CardSection, Button, TripCard } from './common';
import { MAIN_URL } from '../Network';

class TripsList extends Component {

	componentWillMount() {
		if (!this.props.user) {
      Actions.auth({ type: 'reset' });
    }
    this.props.tripsFetch();
    this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	onButtonPress() {
		this.props.authLogOut();
		Actions.auth({ type: 'reset' });
	}

	createDataSource({ trips }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(trips);
	}

	renderRow(trip) {
		return (
			<TripCard
				image={MAIN_URL + trip.photo.url}
				name={trip.name}
				destination={trip.destination}
			/>
		);
	}

	render() {
		return (
			<Card>
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						log out
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { user } = state.LogUser;
	const trips = _.map(state.tripsList, (val, uid) => {
		return { ...val, uid };
	});
	return { trips, user };
};

export default connect(mapStateToProps, { authLogOut, tripsFetch })(TripsList);
