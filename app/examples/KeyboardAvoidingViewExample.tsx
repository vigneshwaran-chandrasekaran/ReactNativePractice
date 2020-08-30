import React from 'react';
import {
	Button,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

// https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
// https://blog.hackajob.co/using-the-keyboardavoidingview-in-react-native/
// https://stackoverflow.com/questions/43854912/react-native-keyboardavoidingview-covers-last-text-input

const KeyboardAvoidingViewExample = () => {
	const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0;

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'padding' : null}
			// behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={keyboardVerticalOffset}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView>
					<Text style={styles.header}>Header</Text>
					<TextInput
						placeholder="Username"
						style={styles.textInput}
					/>
					<TextInput
						placeholder="Username"
						style={styles.textInput}
					/>
					<TextInput
						placeholder="Username"
						style={styles.textInput}
					/>
					<TextInput
						placeholder="Username"
						style={styles.textInput}
					/>
					<TextInput
						placeholder="Username"
						style={styles.textInput}
					/>
					<TextInput
						placeholder="Username"
						style={styles.textInput}
					/>

					<View style={styles.btnContainer}>
						<Button title="Submit" onPress={() => null} />
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		padding: 24,
		flex: 1,
		justifyContent: 'space-around',
	},
	header: {
		fontSize: 36,
		marginBottom: 48,
	},
	textInput: {
		height: 40,
		borderColor: '#000000',
		borderBottomWidth: 1,
		marginBottom: 36,
	},
	btnContainer: {
		backgroundColor: 'white',
		marginTop: 12,
	},
});

export default KeyboardAvoidingViewExample;
