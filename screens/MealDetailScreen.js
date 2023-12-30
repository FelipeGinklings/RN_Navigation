import { useLayoutEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Inner components
// Data
import { MEALS } from '../data/dummy-data';
// Components Screens
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
// Icon
import IconButton from '../components/IconButton';
// Context
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route, navigation }) => {
	const favoriteMealCtx = useContext(FavoritesContext);

	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

	// IconHandler
	const changeFavoriteStatusHandler = () => {
		if (mealIsFavorite) {
			favoriteMealCtx.removeFavorites(mealId);
		} else {
			favoriteMealCtx.addFavorites(mealId);
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					// IconButton
					<IconButton
						icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
						onPress={changeFavoriteStatusHandler}
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler]);

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
