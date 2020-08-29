import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

const AppSwitch = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View>
			<Switch
				trackColor={{ false: 'yellow', true: 'pink' }}
				thumbColor={isEnabled ? 'blue' : 'red'}
				ios_backgroundColor="yellow"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

export default AppSwitch;

const styles = StyleSheet.create({});
