import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const AppText = () => {
	return (
		<View>
			<Text style={styles.baseText}>AppText</Text>
			<Text dataDetectorType={'email'}>mailText@gmail.com</Text>
		</View>
	);
};

export default AppText;

const styles = StyleSheet.create({
	baseText: {
		fontFamily: Platform.OS === 'android' ? 'monospace' : 'Avenir',
	},
});
