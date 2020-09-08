import React from 'react';
import { StyleSheet, View } from 'react-native';
import KeyboardExample from './app/RNApi/KeyboardExample';

export default function App() {
	return <View style={styles.container}>{<KeyboardExample />}</View>;
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
