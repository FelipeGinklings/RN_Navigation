import { useLayoutEffect } from 'react';

// import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
	// const route = useRoute();
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title; 

		navigation.setOptions({
			title: categoryTitle,
			headerTitleAlign: 'center',
		});
	}, [catId, navigation]);

	return <MealsList items={displayedMeals}></MealsList>;
};

export default MealsOverviewScreen;
