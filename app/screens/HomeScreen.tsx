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
			{/* By using push we once again add, same route(navigation) in stack */}
			<Button
				title="Go to Home... again"
				onPress={() => navigation.push('Home')}
			/>
			{/* will go to previous screen */}
			<Button title="Go back" onPress={() => navigation.goBack()} />
			{/* will go to top of the stack (first screen) */}
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
