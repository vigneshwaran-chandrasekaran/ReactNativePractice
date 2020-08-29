import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AppImage = () => {
	return (
		<View>
			<Text>AppImage test</Text>
			{/* <Image
				style={styles.tinyLogo}
				source={require('@expo/snack-static/react-native-logo.png')}
			/> */}
			<Image
				style={styles.tinyLogo}
				blurRadius={2}
				source={{
					uri: 'https://reactnative.dev/img/tiny_logo.png',
				}}
				onLoadEnd={() => console.log('image loaded')}
				onPartialLoad={() => console.log('onPartialLoad ')}
			/>
		</View>
	);
};

export default AppImage;

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
});
