import { StyleSheet } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons'
import { DrawerParamList } from '../types'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const CartLink = () => {
	const navigation = useNavigation<NavigationProp<DrawerParamList>>()
	return <Icons name="shopping-cart" size={30} color="white" onPress={() => navigation.navigate('Cart')} />
}

export default CartLink

const styles = StyleSheet.create({})
