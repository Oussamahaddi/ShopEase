import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import CartItem from '../components/CartItem'
import { Button } from '../components/Button'
import { PRIMARY_COLOR } from '../styles/colors'
import { createPayement } from '../features/payements'
import { DrawerScreenProps } from '../types'

const CartScreen: React.FC<DrawerScreenProps<'Cart'>> = ({navigation}) => {
	const items = useAppSelector((state) => state.cart.items)
	const dispatch = useAppDispatch()
	return (
		<ScrollView contentContainerStyle={styles.container}>
			{items.length === 0 ? (
				<Text>Your cart is empty</Text>
			) : (
				<>
					{items.map((item) => (
						<CartItem key={item.id} course={item} />
					))}
					<View style={styles.footer}>
						<Text style={styles.total}>
							Total:
							<Text style={styles.totalPrice}> {items.reduce((acc, item) => acc + item.price, 0)}€</Text>
						</Text>
						<Button
							title="Checkout"
							onPress={() => {
								Alert.alert('Payement', 'Do you want to proceed to payement?', [
									{ text: 'Cancel', style: 'cancel' },
									{ text: 'OK', onPress: () => {
										dispatch(createPayement())
										navigation.navigate('Payements')
									} },
								])
							}}
						/>
					</View>
				</>
			)}
		</ScrollView>
	)
}

export default CartScreen

const styles = StyleSheet.create({
	container: {
		padding: 15,
		gap: 5,
	},
	sparator: {
		height: 20,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
	total: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	totalPrice: {
		color: PRIMARY_COLOR,
		textTransform: 'uppercase',
	},
})
