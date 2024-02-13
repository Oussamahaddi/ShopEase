import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { RouteProp, useRoute } from '@react-navigation/native'
import { MainNavParamList } from '../types'
import { useCourse } from '../hooks/useCourse'

const HeaderAddToCart: NativeStackNavigationOptions['headerRight'] = ({ tintColor }) => {
	const { params } = useRoute<RouteProp<MainNavParamList>>()
	const { canAddToCart, addToCarthandler, course } = useCourse(params!.courseId)
	return (
		<Icons
			name="shopping-bag"
			size={30}
			color={canAddToCart ? tintColor : 'lightgray'}
			disabled={!canAddToCart}
			onPress={() => {
				alert('Course added to cart')
				addToCarthandler()
			}}
		/>
	)
}

export default HeaderAddToCart

const styles = StyleSheet.create({})
