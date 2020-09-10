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
				onPress={() =>
					navigation.navigate('Details', {
						itemId: 86,
						otherParam: 'anything you want here',
					})
				}
			/>
			{/* By using push we once again add, same route(navigation) in stack */}
			<Button
				title="Go to Home... again"
				onPress={() => navigation.push('Home')}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
