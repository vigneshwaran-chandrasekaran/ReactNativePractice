import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyAppText = () => {
	const [currentFont, setCurrentFont] = useState(24);

	const increaseSize = () => {
		console.log('increaseSize');
		setCurrentFont(36);
	};

	return (
		<View>
			<Text style={styles.baseText}>
				MyAppText <Text style={styles.baseText}>News 11</Text>
			</Text>
			<Text dataDetectorType={'email'}>random@mail.com</Text>
			<Text>random@mail.com</Text>
			<Text disabled={true}>random@mail.com</Text>
			{/* ellipsizeMode will add ... dots to text if it will become too lengthy */}
			<Text
				ellipsizeMode={'clip'}
				numberOfLines={1}
				onLongPress={increaseSize}
				selectable
				selectionColor={'red'}
				style={[styles.largeText, { fontSize: currentFont }]}
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book.
			</Text>
		</View>
	);
};

export default MyAppText;

const styles = StyleSheet.create({
	baseText: {
		color: 'red',
		backgroundColor: 'yellow',
	},
	largeText: {
		color: 'blue',
	},
});
