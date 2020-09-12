import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
	console.log('navigation', navigation);
	const [count, setCount] = React.useState(0);

	/**
	 * using navigation.setOptions we can modify the options of the Stack.Screen
	 */
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => setCount((c) => c + 1)}
					title="Update count"
				/>
			),
		});
	}, [navigation]);

	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Home Screen abc</Text>
			<Text>Count: {count}</Text>
			<Button
				title="Home2"
				onPress={() => navigation.navigate('Home2')}
			/>
			<Button
				title="Profile"
				onPress={() => navigation.navigate('Profile')}
			/>
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
			{/* will go to previous screen */}
			{navigation.canGoBack() && (
				<Button
					title="Go back based on canGoBack()"
					onPress={() => navigation.goBack()}
				/>
			)}
			<Button
				title="Update the title"
				onPress={() => navigation.setOptions({ title: 'Updated!' })}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
