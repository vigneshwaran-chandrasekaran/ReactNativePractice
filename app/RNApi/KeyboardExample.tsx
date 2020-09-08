import React, { useEffect } from 'react';
import { Keyboard, StyleSheet, TextInput } from 'react-native';

const KeyboardExample = () => {
	console.log('Keyboard', Keyboard);
	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
		Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

		// cleanup function
		return () => {
			Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
			Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
		};
	}, []);

	const _keyboardDidShow = () => {
		alert('Keyboard Shown');
	};

	const _keyboardDidHide = () => {
		alert('Keyboard Hidden');
	};

	return (
		<TextInput
			style={s.input}
			placeholder="Click here ..."
			onSubmitEditing={Keyboard.dismiss}
		/>
	);
};

const s = StyleSheet.create({
	input: {
		margin: 60,
		padding: 10,
		borderWidth: 0.5,
		borderRadius: 4,
		backgroundColor: '#fff',
	},
});

export default KeyboardExample;
