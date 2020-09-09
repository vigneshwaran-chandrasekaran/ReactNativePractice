import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Details Screen 222</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate('Home')}
			/>
			{/* we already in same page so nothing happened */}
			<Button
				title="Go to Details... again"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({});
