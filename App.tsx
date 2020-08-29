import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/AppButton';

export default function App() {
	return (
		<View style={styles.container}>
			<AppButton />
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
