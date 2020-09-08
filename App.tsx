import React from 'react';
import { StyleSheet, View } from 'react-native';
import VibrationAPI from './app/RNApi/VibrationAPI';

export default function App() {
	return <View style={styles.container}>{<VibrationAPI />}</View>;
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
