import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, View, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk), autoRehydrate()));

class App extends Component {

	constructor() {
    super();
    this.state = { rehydrated: false };
  }

	componentWillMount() {
		persistStore(store, { storage: AsyncStorage, blacklist: ['authForm', 'tripForm'] }, () => {
			this.setState({ rehydrated: true });
		});
	}

	render() {
		console.log(store.getState())
		if (!this.state.rehydrated) {
      return (
				<View>
					<Text>
						Loading
					</Text>
				</View>
      );
    }
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
