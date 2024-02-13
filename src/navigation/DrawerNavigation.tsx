import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerParamList } from '../types'
import LandingScreen from '../screens/LandingScreen'
import CartScreen from '../screens/CartScreen'
import Icons from '@expo/vector-icons/MaterialIcons'
import PayementsScreen from '../screens/PayementsScreen'
import { PRIMARY_COLOR } from '../styles/colors'
import CartLink from '../components/CartLink'

const Drawer = createDrawerNavigator<DrawerParamList>()
const DrawerNavigation: React.FC = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: PRIMARY_COLOR,
				},
				headerRightContainerStyle:{
					marginRight: 20
				},
				headerRight : CartLink
			}}
		>
			<Drawer.Screen
				name="Landing"
				component={LandingScreen}
				options={{
					drawerIcon: () => <Icons name="menu-book" size={30} color="black" />,
				}}
			/>
			<Drawer.Screen
				name="Cart"
				component={CartScreen}
				options={{
					drawerIcon: () => <Icons name="shopping-cart" size={30} color="black" />,
				}}
			/>
			<Drawer.Screen
				name="Payements"
				component={PayementsScreen}
				options={{
					drawerIcon: () => <Icons name="payment" size={30} color="black" />,
				}}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigation

const styles = StyleSheet.create({})
