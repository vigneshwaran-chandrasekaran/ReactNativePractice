import Constants from 'expo-constants';
import React from 'react';
import { Text, View } from 'react-native';

const ExpoConstants = () => {
	console.log('Constants', Constants);

	return (
		<View>
			<Text>deviceName: {Constants.deviceName}</Text>
			<Text>deviceId: {Constants.deviceId}</Text>
			<Text>sessionId: {Constants.sessionId}</Text>
		</View>
	);
};

export default ExpoConstants;
