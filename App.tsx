import React from 'react';
import { StyleSheet, View } from 'react-native';
import KeyboardAvoidingViewExample from './app/examples/KeyboardAvoidingViewExample';

export default function App() {
	return (
		<View style={styles.container}>
			<KeyboardAvoidingViewExample />
		</View>
	);
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
