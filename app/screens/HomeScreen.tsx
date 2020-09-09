import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Home Screen abc</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details')}
			/>
			{/* By using push we once again add, same route in stack queue */}
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push('Details')}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
