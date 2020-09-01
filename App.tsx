import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './app/components/AppText';

export default function App() {
	return <View style={styles.container}>{<AppText />}</View>;
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
