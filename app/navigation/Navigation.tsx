import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';
import DummyScreen from '../screens/DummyScreen';
import HomeScreen from '../screens/HomeScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

function Profile() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Feed" component={DummyScreen} />
			<Tab.Screen name="Messages" component={DummyScreen} />
		</Tab.Navigator>
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
						headerRight: () => (
							<Button
								onPress={() => alert('This is a button!')}
								title="Info"
								color="#fff"
							/>
						),
					}}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={({ route }) => ({
						title: route?.params?.name,
						headerBackTitle: 'Billa 2',
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
					options={{ title: 'Overview', headerBackTitle: 'Billa' }}
					initialParams={{ itemId: 42, name: 'vigneshwaran' }}
				/>
				<Stack.Screen name="Profile" component={Profile} />
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
