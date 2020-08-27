// import Clipboard from '@react-native-community/clipboard';
import React, { useState } from 'react';
import {
	Clipboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const ClipboardAccess = () => {
	const [copiedText, setCopiedText] = useState('');
	console.log('Clipboard', Clipboard);

	const copyToClipboard = () => {
		try {
			console.log('Clipboard', Clipboard);
			Clipboard.setString('hello world');
		} catch (error) {
			console.log('Clipboard error', error);
		}
	};

	const fetchCopiedText = async () => {
		try {
			const text = await Clipboard.getString();
			console.log('text', text);
			setCopiedText(text);
		} catch (error) {
			console.log('Clipboard error', error);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<TouchableOpacity onPress={copyToClipboard}>
					<Text>Click here to copy to Clipboard</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={fetchCopiedText}>
					<Text>View copied text</Text>
				</TouchableOpacity>

				<Text style={styles.copiedText}>{copiedText}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	copiedText: {
		marginTop: 10,
		color: 'red',
	},
});

export default ClipboardAccess;
