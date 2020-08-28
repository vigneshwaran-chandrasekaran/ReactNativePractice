import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClipboardAccess from './app/ClipboardAccess';
import { ViewComponent } from './app/examples';
import ExpoConstants from './app/ExpoConstants';

export default function App() {
	console.log('process', process);
	return (
		<View style={styles.container}>
			<ViewComponent />
			<ClipboardAccess />
			<ExpoConstants />
			<Text>Build type: {process.env.REACT_APP_BUILD}</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
