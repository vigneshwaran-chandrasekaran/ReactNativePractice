import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

/**
 * The casing of the route name doesn't matter --
 * you can use lowercase home or capitalized Home, it's up to you.
 * react-navigation prefer capitalizing route names.
 *
 * The only required configuration for a screen is the 'name' and 'component' props.
 */

function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={{
				uri: 'https://reactnative.dev/img/tiny_logo.png',
			}}
		/>
	);
}

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: '#ff356b',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name="Home2"
					component={HomeScreen}
					options={{
						headerTitle: (props) => <LogoTitle {...props} />,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={({ route }) => ({
						title: route?.params?.name,
						headerStyle: {
							backgroundColor: '#f4511e',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					})}
				/>
				<Stack.Screen
					name="Details"
					component={DetailsScreen}
					options={{ title: 'Overview' }}
					initialParams={{ itemId: 42, name: 'vigneshwaran' }}
				/>
				{/* 'initialParams' used to pass initial params to route */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

const styles = StyleSheet.create({
	text: {
		marginTop: 111,
		backgroundColor: 'pink',
	},
});
