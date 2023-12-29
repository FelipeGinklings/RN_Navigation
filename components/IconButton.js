import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, buttonColor, onPress }) => {
	return (
		// <Pressable
		// 	onPress={onPress}
		// 	style={({ pressed }) => pressed && styles.pressed}
		// >
		<Pressable onPress={onPress}>
			<Ionicons name={icon} size={30} color={buttonColor} />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({});
