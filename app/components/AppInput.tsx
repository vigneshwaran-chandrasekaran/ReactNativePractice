import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const AppInput = () => {
	const [value, onChangeText] = useState('Useless Placeholder');

	return (
		<View>
			<Text>AppInput</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
		</View>
	);
};

export default AppInput;

const styles = StyleSheet.create({});
