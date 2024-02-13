import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerParamList, MainNavScreenProps } from '../types'
import { ScrollView } from 'react-native'
import { PRIMARY_COLOR } from '../styles/colors'
import Icons from '@expo/vector-icons/MaterialIcons'
import { Button } from '../components/Button'
import { useAppDispatch, useAppSelector } from '../hooks'
import { addToCart } from '../features/cart/cartSlice'
import { useCourse } from '../hooks/useCourse'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const CourseScreen: React.FC<MainNavScreenProps<'Course'>> = ({ route }) => {
	const { course, canAddToCart, addToCarthandler } = useCourse(route.params.courseId)!
	const { description, image, price, selected, id } = course
	const dispatch = useAppDispatch()

	const navigation = useNavigation<NavigationProp<DrawerParamList>>()

	return (
		<View style={styles.container}>
			<Image source={{ uri: image }} style={styles.image} />
			<ScrollView style={styles.body}>
				<Text style={styles.description}>{description}</Text>
			</ScrollView>
			<View style={styles.priceContainer}>
				<Text style={styles.price}>{price} €</Text>
			</View>
			<View style={styles.courseActions}>
				<Pressable onPress={() => navigation.navigate('Cart')}>
					<Icons name="arrow-back-ios" size={30} color="white" />
				</Pressable>
				<Button onPress={() => {
					alert('Course added to cart')
					dispatch(addToCart(course))
					}} title="Add to cart" disabled={!canAddToCart} />
			</View>
		</View>
	)
}

export default CourseScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: '100%',
		height: 300,
	},
	body: {
		padding: 40,
	},
	description: { fontSize: 16 },
	priceContainer: {
		alignItems: 'flex-end',
		backgroundColor: '#dadada',
		padding: 20,
		marginTop: 'auto',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		elevation: 5,
	},
	price: {
		fontSize: 20,
		fontWeight: 'bold',
		color: PRIMARY_COLOR,
		textTransform: 'uppercase',
	},
	courseActions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
		paddingHorizontal: 25,
		backgroundColor: PRIMARY_COLOR,
	},
})
