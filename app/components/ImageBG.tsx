import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = {
	uri:
		'https://i.pinimg.com/564x/6f/d6/8c/6fd68ced202b643053e9f281de52a016.jpg',
};

const ImageBG = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				style={styles.image}
				blurRadius={10}
			>
				<Text style={styles.text}>Inside</Text>
			</ImageBackground>
		</View>
	);
};

export default ImageBG;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
