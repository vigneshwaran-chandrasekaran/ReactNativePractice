import React from 'react';
import { StyleSheet, View } from 'react-native';
import DimensionsExample from './app/RNApi/DimensionsExample';

export default function App() {
	return <View style={styles.container}>{<DimensionsExample />}</View>;
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
