import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
	const renderCategoryItem = (itemData) => {
		const onPressHandler = () => {
			navigation.navigate('MealsOverview');
		};

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={onPressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		></FlatList>
	);
};

export default CategoriesScreen;
