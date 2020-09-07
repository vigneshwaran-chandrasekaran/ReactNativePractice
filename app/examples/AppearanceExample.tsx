import React from 'react';
import { Appearance, StyleSheet, Text, View } from 'react-native';

const AppearanceExample = () => {
	console.log('Appearance', Appearance);

	const colorScheme = Appearance.getColorScheme();
	console.log('colorScheme', colorScheme);
	if (colorScheme === 'dark') {
		// Use dark color scheme
		console.log('dark');
	} else {
		console.log('light');
	}

	return (
		<View>
			<Text>AppearanceExample</Text>
		</View>
	);
};

export default AppearanceExample;

const styles = StyleSheet.create({});
