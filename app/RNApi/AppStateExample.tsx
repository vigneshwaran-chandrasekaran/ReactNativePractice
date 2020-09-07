import React, { useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';

const AppStateExample = () => {
	const appState = useRef(AppState.currentState);
	const [appStateVisible, setAppStateVisible] = useState(appState.current);

	console.log('appState', appState);

	useEffect(() => {
		/**
		 * on component load register the function
		 */
		AppState.addEventListener('change', _handleAppStateChange);
		AppState.addEventListener('blur', _handleAppStateBlur);

		return () => {
			/**
			 * on component unload deregister the function
			 */
			AppState.removeEventListener('change', _handleAppStateChange);
			AppState.removeEventListener('blur', _handleAppStateBlur);
		};
	}, []);

	const _handleAppStateChange = (nextAppState) => {
		if (
			appState.current.match(/inactive|background/) &&
			nextAppState === 'active'
		) {
			console.log('App has come to the foreground!');
		}

		appState.current = nextAppState;
		setAppStateVisible(appState.current);
		console.log('AppState', appState.current);
	};

	const _handleAppStateBlur = () => {
		/**
		 * [Android only] Received when the user is not actively interacting with the app.
		 * Useful in situations when the user pulls down the notification drawer.
		 * AppState won't change but the blur event will get fired.
		 */
		console.log('_handleAppStateBlur', appState);
	};

	return (
		<View style={styles.container}>
			<Text>Current state is: {appStateVisible}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default AppStateExample;
