import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppSwitch from './app/components/AppSwitch';

export default function App() {
	return (
		<View style={styles.container}>
			<AppSwitch />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});
