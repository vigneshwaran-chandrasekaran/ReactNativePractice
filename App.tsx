import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppearanceExample from './app/RNApi/AppearanceExample';

export default function App() {
	return <View style={styles.container}>{<AppearanceExample />}</View>;
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
