import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';

/**
 * In react-native animation
 * we set what's need to happen,
 * not how it should happen
 */

const AnimatedExample = () => {
	// fadeAnim will be used as the value for opacity. Initial Value: 0

	/**
	 * Animated.Value will change to component position without rerending the page,
	 * so that we don't give any number, interval or settimout to change the position.
	 * 
	 * we don't update inbetween animation value from starting to ending position,
	 * that will take care by RN Animated
	 * 
	 * Animated.value(RN) will take care of the animation
	 * // https://www.youtube.com/watch?v=vGl4nnn88Lw&list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo&index=6
	 */
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 5 seconds
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.fadingContainer,
					{
						opacity: fadeAnim, // Bind opacity to animated value
					},
				]}
			>
				<Text style={styles.fadingText}>Fading View!</Text>
			</Animated.View>
			<View style={styles.buttonRow}>
				<Button title="Fade In" onPress={fadeIn} />
				<Button title="Fade Out" onPress={fadeOut} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fadingContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: 'powderblue',
	},
	fadingText: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10,
	},
	buttonRow: {
		flexDirection: 'row',
		marginVertical: 16,
	},
});

export default AnimatedExample;
