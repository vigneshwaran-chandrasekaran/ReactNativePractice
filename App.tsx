import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedExample from './app/RNApi/AnimatedExample';

export default function App() {
	return <View style={styles.container}>{<AnimatedExample />}</View>;
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
