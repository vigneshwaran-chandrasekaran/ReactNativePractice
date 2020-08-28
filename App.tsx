import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppImage from './app/components/AppImage';

export default function App() {
	return (
		<View style={styles.container}>
			<AppImage />
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
