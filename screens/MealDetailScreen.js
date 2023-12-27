// import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = (route) => {
	// const route = useRoute();
  const mealId = route.params.mealId;

	return (
		<View>
			<Text>This is the Meal Detail screen! ID: {mealId}</Text>
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
