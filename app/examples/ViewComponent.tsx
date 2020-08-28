import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ViewComponent() {
	/**
	 * accessible - the flag set to true will enable the view or component to be an
	 * accessibility element that can be read by VoiceOver for people with disabilities.
	 */
	/**
	 * collapsable - Views that are only used to layout their children or otherwise don't draw
	 * anything may be automatically removed from the native hierarchy as an optimization.
	 * Set this property to false to disable this optimization and
	 * ensure that this View exists in the native view hierarchy.
	 */
	return (
		<View accessible={true} collapsable>
			<Text>View</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
