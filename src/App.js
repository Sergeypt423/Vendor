/* global XMLHttpRequest */

import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import {
	Navigator,
} from 'react-native-deprecated-custom-components';

import { Provider } from 'react-redux';

import store from 'Vendor/src/store';
import * as session from 'Vendor/src/services/session';
import * as routeHistoryActions from 'Vendor/src/services/routeHistory/actions';
import Splash from 'Vendor/src/scenes/Splash';

import Main from 'Vendor/src/scenes/Main';
import Home from 'Vendor/src/scenes/Main/Home';
import ItemDetail from 'Vendor/src/scenes/Main/ItemDetail';
import Login from 'Vendor/src/scenes/Main/Login';
import GetStarted from 'Vendor/src/scenes/Main/GetStarted';
import Warning from 'Vendor/src/scenes/Main/Warning'
import Register from 'Vendor/src/scenes/Main/Register';
import Plantrip from 'Vendor/src/scenes/Main/Plantrip';
import Planstops from 'Vendor/src/scenes/Main/Planstops';
import PlanMoveTime from 'Vendor/src/scenes/Main/PlanMoveTime';
import ItemsToMove from 'Vendor/src/scenes/Main/ItemsToMove';

// This is used in order to see requests on the Chrome DevTools
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest :
	GLOBAL.XMLHttpRequest;

const transition = Navigator.SceneConfigs.HorizontalSwipeJump;
transition.gestures = null;

const routeStack = [
	{ name: 'Main', component: Main },
	{ name: 'Login', component: Login },
	{ name: 'Register', component: Register },
	{ name: 'Home', component: Home },	
	{ name: 'ItemDetail', component: ItemDetail },
	{ name: 'GetStarted', component: GetStarted },
	{ name: 'Warning', component: Warning },
	{ name: 'Plantrip', component: Plantrip },
	{ name: 'Planstops', component: Planstops },
	{ name: 'PlanMoveTime', component: PlanMoveTime },
	{ name: 'ItemsToMove', component: ItemsToMove }

];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialRoute: null,
		};
	}

	componentDidMount() {
		// Waits for the redux store to be populated with the previously saved state,
		// then it will try to auto-login the user.
		const unsubscribe = store.subscribe(() => {
			if (store.getState().services.persist.isHydrated) {
				unsubscribe();
				this.autoLogin();
			}
		});
	}

	autoLogin() {
		session.check().then(() => {
			this.setState({ initialRoute: routeStack[0] });
		}).catch(() => {
			this.setState({ initialRoute: routeStack[0] });
		});
	}

	renderContent() {
		if (!this.state.initialRoute) {
			return <Splash />;
		}

		return (
			<Navigator
				initialRoute={this.state.initialRoute}
				initialRouteStack={routeStack}
				configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
				onWillFocus={route => store.dispatch(routeHistoryActions.push(route))}
				renderScene={(route, navigator) =>
					<route.component route={route} navigator={navigator} {...route.passProps} />
				}
			/>
		);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#eee' }}>
				<Provider store={store}>
					{this.renderContent()}
				</Provider>
			</View>
		);
	}
}

export default App;
