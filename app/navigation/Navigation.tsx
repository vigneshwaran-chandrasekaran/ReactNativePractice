import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
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

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Details">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'House' }}
				/>
				<Stack.Screen
					name="Details"
					component={DetailsScreen}
					options={{ title: 'Overview' }}
				/>
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
