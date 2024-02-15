import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Course } from '../features/courses'
import Icons from '@expo/vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../styles/colors'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavParamList } from '../types'
import { addToCart } from '../features/cart/cartSlice'
import { useAppDispatch } from '../hooks'
type CardProps = {
	course: Course
}
const CourseCard: React.FC<CardProps> = ({ course }) => {
	const { title, image: uri, price, id } = course
	const navigation = useNavigation<NavigationProp<MainNavParamList>>()
	const dispatch = useAppDispatch()
	return (
		<Pressable
			testID={'course-card-' + id}
			style={styles.container}
			onPress={() => {
				navigation.navigate('Course', { courseId: course.id })
			}}
		>
			<Image source={{ uri }} style={styles.image} />
			<View style={styles.cardDetails}>
				<Text style={styles.title}>{title}</Text>
				<Text>{price}</Text>
				<View style={styles.cardActions}>
					<Icons name="remove-red-eye" size={30} color={PRIMARY_COLOR} />
					<Icons
						name="shopping-bag"
						size={30}
						color={PRIMARY_COLOR}
						onPress={() => {
							alert('Course added to cart')
							dispatch(addToCart(course))
						}}
					/>
				</View>
			</View>
		</Pressable>
	)
}

export default CourseCard

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 10,
		overflow: 'hidden',
		elevation: 2,
	},
	image: { width: '100%', height: 200 },
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: PRIMARY_COLOR,
		textTransform: 'uppercase',
		marginBottom: 5,
	},
	cardDetails: {
		padding: 10,
		paddingHorizontal: 20,
		alignItems: 'center',
		flexDirection: 'column',
		flex: 1,
	},
	cardActions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		// paddingHorizontal: 20,
	},
})
