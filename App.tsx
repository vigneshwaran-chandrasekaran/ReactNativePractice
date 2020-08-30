import React from 'react';
import { StyleSheet, View } from 'react-native';
import PressableExample from './app/examples/PressableExample';

export default function App() {
	return <View style={styles.container}>{<PressableExample />}</View>;
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
