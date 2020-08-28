import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyAppText } from './app/examples';

export default function App() {
	return (
		<View style={styles.container}>
			<MyAppText />
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
