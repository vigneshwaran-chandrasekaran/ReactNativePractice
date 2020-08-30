import React from 'react';
import { StyleSheet, View } from 'react-native';
import RefreshControlExample from './app/examples/RefreshControlExample';

export default function App() {
	return <View style={styles.container}>{<RefreshControlExample />}</View>;
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
