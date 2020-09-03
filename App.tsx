import React from 'react';
import { StyleSheet, View } from 'react-native';
import SectionListExample from './app/examples/SectionListExample';

export default function App() {
	return <View style={styles.container}>{<SectionListExample />}</View>;
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
