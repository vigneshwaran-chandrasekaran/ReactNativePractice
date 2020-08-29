import React, { useEffect, useRef, useState } from 'react';
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const EMPTY_DATA = [];
const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: '1st Box',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: '4',
		title: 'First Item',
	},
	{
		id: '5',
		title: 'Second Item',
	},
	{
		id: '6',
		title: 'Third Item',
	},
	{
		id: '7',
		title: 'First Item',
	},
	{
		id: '8',
		title: 'Second Item',
	},
	{
		id: '9',
		title: 'Third Item',
	},
	{
		id: '10',
		title: 'First Item',
	},
	{
		id: '11',
		title: 'Second Item',
	},
	{
		id: '12',
		title: 'Third Item',
	},
	{
		id: '13',
		title: 'First Item',
	},
	{
		id: '14',
		title: 'Second Item',
	},
	{
		id: '16',
		title: 'Last Box 1',
	},
];

const Item = ({ title }) => (
	<TouchableOpacity onPress={() => console.log('title', title)}>
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	</TouchableOpacity>
);

const FlatListExample = () => {
	const renderItem = ({ item }) => <Item title={item.title} />;
	const [refreshing, setRefreshing] = useState(false);
	const flatListEl = useRef(null);

	useEffect(() => {
		console.log('flatListEl', flatListEl);
		if (flatListEl) {
			flatListEl.current.scrollToEnd();
		}
	}, [flatListEl]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				ref={flatListEl}
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				// numColumns={2}
				horizontal={false}
				ListEmptyComponent={<Text>No data found</Text>}
				ListHeaderComponent={
					<Text style={styles.listFooter}>List Header</Text>
				}
				ListFooterComponent={
					<Text style={styles.listFooter}>Footer</Text>
				}
				inverted={false} // will reverse the order
				onEndReached={() => console.log('Reached end of list')}
				refreshing={refreshing}
				onRefresh={() => {
					setRefreshing(true);
					console.log('onRefresh starts');
					setTimeout(() => {
						setRefreshing(false);
						console.log('onRefresh ends');
					}, 1500);
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		width: '100%',
	},
	item: {
		backgroundColor: '#fff',
		padding: 5,
		marginVertical: 8,
		// marginHorizontal: 16,
		borderColor: '#ccc',
		borderWidth: 2,
		width: '100%',
	},
	title: {
		fontSize: 16,
	},
	listFooter: {
		backgroundColor: '#fff',
		color: 'red',
		textAlign: 'center',
		padding: 20,
	},
});

export default FlatListExample;
