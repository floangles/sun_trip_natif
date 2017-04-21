import React, { Component } from 'react';
import { DatePickerIOS, Text, ScrollView, CameraRoll, Switch } from 'react-native';
import { connect } from 'react-redux';
import { tripUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class TripCreate extends Component {

	onButtonPress() {
		const { name, destination, start_date, end_date } = this.props;
		// this.props.trip.create({ name, destination, start_date, end_date })
	}

	render() {
		return (
			<ScrollView>
				<Card>
					<CardSection>
						<Input
							placeholder='Name'
							value={this.props.name}
							onChangeText={value => this.props.tripUpdate({ prop: 'name', value })}
						/>
					</CardSection>
					<CardSection>
						CameraRoll
					</CardSection>
					<CardSection>
						<Input
							placeholder='Destination'
							value={this.props.destination}
							onChangeText={value => this.props.tripUpdate({ prop: 'destination', value })}
						/>
					</CardSection>
						<Text>
							Start of the trip
						</Text>
						<DatePickerIOS
							date={this.props.start_date}
							mode="date"
							onDateChange={value => this.props.tripUpdate({ prop: 'start_date', value })}
						/>
						<Text>
							End of the trip
						</Text>
						<DatePickerIOS
							date={this.props.end_date}
							mode="date"
							onDateChange={value => this.props.tripUpdate({ prop: 'end_date', value })}
						/>
						<CardSection>
							<Button onPress={this.onButtonPress.bind(this)}>
								Create
							</Button>
						</CardSection>
				</Card>
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, destination, start_date, end_date, timeZoneOffsetInHours } = state.tripForm;
	return { name, destination, start_date, end_date, timeZoneOffsetInHours };
};

export default connect(mapStateToProps, { tripUpdate })(TripCreate);

