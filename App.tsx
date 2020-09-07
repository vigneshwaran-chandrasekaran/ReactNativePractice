import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppStateExample from './app/RNApi/AppStateExample';

export default function App() {
	return <View style={styles.container}>{<AppStateExample />}</View>;
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
