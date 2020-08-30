import React from 'react';
import { StyleSheet, View } from 'react-native';
import StatusBarExample from './app/examples/StatusBarExample';

export default function App() {
	return <View style={styles.container}>{<StatusBarExample />}</View>;
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
