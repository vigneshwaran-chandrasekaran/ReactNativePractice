import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageBG from './app/components/ImageBG';

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBG />
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
