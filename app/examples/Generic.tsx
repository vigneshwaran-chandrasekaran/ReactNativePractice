import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Generic = () => {
	return (
		<View>
			<Text>Generic</Text>
			<ActivityIndicator />
			<ActivityIndicator animating={false} size="large" color="red" />
			<ActivityIndicator size="large" />
			<ActivityIndicator size="small" color="#0000ff" />
			<ActivityIndicator size="large" color="#00ff00" />
		</View>
	);
};

export default Generic;

const styles = StyleSheet.create({});
