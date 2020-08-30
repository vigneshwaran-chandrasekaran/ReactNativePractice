import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppModal from './app/components/AppModal';

export default function App() {
	return (
		<View style={styles.container}>
			<AppModal />
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
