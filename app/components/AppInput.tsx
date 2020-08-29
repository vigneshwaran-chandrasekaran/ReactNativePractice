import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const AppInput = () => {
	const [value, onChangeText] = useState('Useless Placeholder');

	return (
		<View style={styles.container}>
			<Text>AppInput BOs 12w</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
					width: '100%',
					backgroundColor: '#ccc',
				}}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				defaultValue={'what is the new content'}
				autoCapitalize={'words'}
				keyboardAppearance="dark"
				keyboardType="number-pad"
			/>
		</View>
	);
};

export default AppInput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
