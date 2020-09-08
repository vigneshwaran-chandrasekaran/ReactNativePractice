import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

/**
 *
 * window's height < screen's height.
 *
 * window: reports width/height without the soft menu bar
 * screen: reports entire screen's width/height
 */

console.log('Dimensions window', window);
console.log('Dimensions screen', screen);

const DimensionsExample = () => {
	const [dimensions, setDimensions] = useState({ window, screen });

	const onChange = ({ window, screen }) => {
		setDimensions({ window, screen });
	};

	useEffect(() => {
		Dimensions.addEventListener('change', onChange);
		return () => {
			Dimensions.removeEventListener('change', onChange);
		};
	});

	return (
		<View style={styles.container}>
			<Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
			<Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default DimensionsExample;
