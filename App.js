import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';

// Navigators components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Intern Components
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#351401',
				},
				headerTintColor: 'white',
				sceneContainerStyle: { backgroundColor: '#3f2f25' },
				headerTitleAlign: 'center',
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
				}}
			/>
			<Drawer.Screen name="Favorites" component={FavoritesScreen} />
		</Drawer.Navigator>
	);
};

const App = () => {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#351401',
						},
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' },
						headerTitleAlign: 'center',
					}}
				>
					<Stack.Screen
						name="Drawer"
						component={DrawerNavigator}
						title="All Categories"
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						//   const catId = route.params.categoryId
						//   return {
						//     title: catId,
						//   }
						// }}
					/>
					<Stack.Screen
						name="MealDetail"
						component={MealDetailScreen}
						options={{
							title: 'About the Meal',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;

const styles = StyleSheet.create({});
