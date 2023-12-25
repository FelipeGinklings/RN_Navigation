import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Extra components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Intern Components
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered application component.
 */
const App = () => {
	return (
		<>
			{/* Renders the status bar */}
			<StatusBar style="dark" />
			{/* Renders the navigation container */}
			<NavigationContainer>
				{/* Renders the stack navigator */}
				<Stack.Navigator>
					{/* Renders the screen for meals categories */}
					<Stack.Screen
						name="Categories"
						component={CategoriesScreen}
						title="Meal Categories"
					/>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverViewScreen}
						title
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {},
});
