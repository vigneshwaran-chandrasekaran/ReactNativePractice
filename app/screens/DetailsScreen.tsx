import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
	const { otherParam, itemId } = route.params;
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Details Screen 222</Text>
			<Text>
				{otherParam} Screen {itemId}
			</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate('Home')}
			/>
			{/* we already in same page so nothing happened */}
			<Button
				title="Go to Details... again"
				onPress={() => navigation.navigate('Details')}
			/>
			{navigation.canGoBack() && (
				<Button
					title="Go back based on canGoBack()"
					onPress={() => navigation.goBack()}
				/>
			)}
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

export default DetailsScreen;

const styles = StyleSheet.create({});
