import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedBallExample from './app/RNApi/AnimatedBallExample';

export default function App() {
	return <View style={styles.container}>{<AnimatedBallExample />}</View>;
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
