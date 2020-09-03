import Constants from 'expo-constants';
import React from 'react';
import {
	SafeAreaView,
	SectionList,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const DATA = [
	{
		title: 'Main dishes',
		data: ['Pizza', 'Burger', 'Risotto'],
	},
	{
		title: 'Sides',
		data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
	},
	{
		title: 'Drinks',
		data: ['Water', 'Coke', 'Beer'],
	},
	{
		title: 'Desserts',
		data: ['Cheese Cake', 'Ice Cream'],
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

/**
 * Inherits ScrollView Props.
 */
const SectionListExample = () => (
	<SafeAreaView style={styles.container}>
		<SectionList
			sections={DATA}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={styles.header}>{title}</Text>
			)}
			horizontal={false}
			ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
			ListHeaderComponent={() => (
				<View style={styles.footer}>
					<Text style={styles.footerText}>Header</Text>
				</View>
			)}
			ListFooterComponent={() => (
				<View style={styles.footer}>
					<Text style={styles.footerText}>Footer</Text>
				</View>
			)}
		/>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginHorizontal: 16,
		width: '100%',
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
	},
	itemSeparator: {
		borderWidth: 1,
		borderColor: '#ccc',
	},
	header: {
		fontSize: 32,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
	},
	footer: {
		padding: 30,
		backgroundColor: 'gold',
		alignItems: 'center',
	},
	footerText: {
		fontSize: 50,
		color: 'white',
	},
});

export default SectionListExample;
