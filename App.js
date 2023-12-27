import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Extra components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Intern Components
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#351401',
						},
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' },
					}}
				>
					<Stack.Screen
						name="Categories"
						component={CategoriesScreen}
						title="All Categories"
						options={{
							title: 'Meals Categories',
						}}
					/>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;

const styles = StyleSheet.create({});
