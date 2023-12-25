import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
						name="Meals Categories"
						component={CategoriesScreen}
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
