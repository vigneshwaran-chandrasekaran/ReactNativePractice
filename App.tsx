import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShareExample from './app/RNApi/ShareExample';

export default function App() {
	return <View style={styles.container}>{<ShareExample />}</View>;
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
