import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { geolocalisationUpdate } from '../actions';
import { Map, Button, CardSection } from './common';

class Trip extends Component {


	onLocationPressed() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = position;
        console.log(initialPosition);
        this.props.geolocalisationUpdate({ prop: 'localisation', value: initialPosition });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

	render() {
		let loc = null;
		if (this.props.localisation) {
			loc = (
				<View>
					<Text>
						speed : {this.props.localisation.coords.speed}
					</Text>
					<Text>
						longitude : {this.props.localisation.coords.longitude}
					</Text>
					<Text>
						latitude: {this.props.localisation.coords.latitude}
					</Text>
				</View>
			);
		}

		return (
			<View>
				<CardSection>
					<Button onPress={this.onLocationPressed.bind(this)}>
						Get Position
					</Button>
				</CardSection>
				{loc}
				<CardSection>
					<Map />
				</CardSection>
			</View>
		);
	}
}

const mapStateToProps = ({ geoloc }) => {
	const { localisation } = geoloc;
	return { localisation };
};

export default connect(mapStateToProps, { geolocalisationUpdate })(Trip);
