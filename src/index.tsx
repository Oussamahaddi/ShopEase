import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainNavigation from './navigation/MainNavigation'
const Stack = createNativeStackNavigator()
export const App = () => {
	return (
		<NavigationContainer>
			<MainNavigation />
		</NavigationContainer>
	)
}
