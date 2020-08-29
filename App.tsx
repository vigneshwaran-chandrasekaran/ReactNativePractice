import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppInput from './app/components/AppInput';

export default function App() {
	return (
		<View style={styles.container}>
			<AppInput />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
