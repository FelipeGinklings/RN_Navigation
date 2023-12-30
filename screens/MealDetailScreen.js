import { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Own components
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;
  // Changing the color when pressed
	const [buttonColor, setButtonColor] = useState('white');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // IconHandler
	const headerButtonPressHandler = () => {
		setButtonColor((prev) => (prev === 'white' ? '#e2b497' : 'white'));
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
          // IconButton
					<IconButton
						onPress={headerButtonPressHandler}
						icon="star"
						buttonColor={buttonColor}
					/>
				);
			},
		});
	}, [navigation, headerButtonPressHandler, buttonColor]);

	const mealDetailsProps = {
		duration: selectedMeal.duration,
		complexity: selectedMeal.complexity,
		affordability: selectedMeal.affordability,
		textStyle: { color: 'white' },
	};

	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }}
			/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<View>
				<MealDetails {...mealDetailsProps} />
			</View>
			<View style={styles.listOutterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 24,
	},
	image: {
		width: '100%',
		height: 280,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	listOutterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '80%',
	},
});
