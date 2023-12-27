// import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealDetailScreen = ({ route }) => {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const mealDetailsProps = {
		duration: selectedMeal.duration,
		complexity: selectedMeal.complexity,
		affordability: selectedMeal.affordability,
	};

	return (
		<View>
			<Image source={{ uri: selectedMeal.imageUrl }} />
			<Text>{selectedMeal.title}</Text>
			<View>
				<MealDetails {...mealDetailsProps} />
			</View>

			<Text>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<Text key={ingredient}>{ingredient}</Text>
			))}
			<Text>Steps</Text>
			{selectedMeal.steps.map((steps) => (
				<Text key={steps}>{steps}</Text>
			))}
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
