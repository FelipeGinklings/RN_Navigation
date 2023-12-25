import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
/**
 * Renders a grid tile for a category.
 *
 * @param {string} title - The title of the category.
 * @param {string} color - The background color of the tile.
 * @returns {JSX.Element} - The rendered grid tile.
 */
const CategoryGridTile = ({ title, color, onPress }) => {
	return (
		<View style={[styles.gridItem, { backgroundColor: color }]}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
        onPress={onPress}
			>
				<View style={styles.innerContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		backgroundColor: 'white',
		// ANDROID
		elevation: 4,
		// IOS
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	buttonPressed: {
		opacity: 0.5,
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});
