import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from './components/LoginForm';
import TripsList from './components/TripsList';
import TripCreate from './components/TripCreate';
import Trip from './components/Trip';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 100, backgroundColor: '#eeeff1' }} navigationBarStyle={{ backgroundColor: '#FFFFFF' }}>
			<Scene key="auth">
				<Scene key='login' component={LoginForm} title='please Login' />
			</Scene>

			<Scene key='main' initial>

				<Scene
					onLeft={() => console.log('a gauche')}
					onRight={() => console.log('a droite')}
					renderLeftButton={() => <TouchableOpacity><Icon name="search" size={25} color="#3E3E3E" /></TouchableOpacity>}
					renderRightButton={() => <TouchableOpacity><Icon name="user-circle-o" size={25} color="#3E3E3E" /></TouchableOpacity>}
					key='tripslist'
					component={TripsList}
					title="Trips"
				/>

				<Scene
					key='tripCreate'
					component={TripCreate}
					title="create a trip"
				/>
				<Scene
					key='tripShow'
					component={Trip}
					title="Localize my ass"
					initial
				/>

			</Scene>
		</Router>
	);
};

export default RouterComponent;
