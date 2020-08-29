import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatListExample from './app/examples/FlatListExample';

export default function App() {
	return (
		<View style={styles.container}>
			<FlatListExample />
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
