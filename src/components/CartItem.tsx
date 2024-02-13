import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Course } from '../features/courses'
import Icons from '@expo/vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../styles/colors'
import { removeFromCart } from '../features/cart/cartSlice'
import { useAppDispatch } from '../hooks'

type ItemProps = {
	course: Course
}
const CartItem: React.FC<ItemProps> = ({ course }) => {
	const dispatch = useAppDispatch()
	const { title, price } = course
	return (
		<View style={styles.container}>
			<Text>{title}</Text>
			<View style={styles.actions}>
				<Text>{price} €</Text>
				<Icons
					name="delete"
					size={30}
					color={PRIMARY_COLOR}
					onPress={() => dispatch(removeFromCart(course.id))}
				/>
			</View>
		</View>
	)
}

export default CartItem

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 15,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	actions: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
	},
})
