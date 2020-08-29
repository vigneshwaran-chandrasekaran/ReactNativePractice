import React from 'react';
import {
	Alert,
	Button,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const AppButton = () => {
	return (
		<View>
			<Button
				onPress={() => Alert.alert('Simple Button pressed.')}
				title="Learn More"
				accessibilityLabel="Learn more about this purple button"
				color="red"
				disabled
			/>
			<TouchableOpacity style={styles.appBtn}>
				<Text>Learn More</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	appBtn: {
		backgroundColor: 'gold',
		color: 'red',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		width: '100%',
	},
});
