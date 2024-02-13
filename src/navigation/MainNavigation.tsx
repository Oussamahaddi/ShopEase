import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainNavParamList } from '../types'
import DrawerNavigation from './DrawerNavigation'
import CourseScreen from '../screens/CourseScreen'
import { PRIMARY_COLOR } from '../styles/colors'
import Icons from '@expo/vector-icons/MaterialIcons'
import { useAppSelector } from '../hooks'
import Title from '../components/Title'
import HeaderAddToCart from '../components/QuickAddToCart'

const Stack = createNativeStackNavigator<MainNavParamList>()

const MainNavigation: React.FC = () => {
	const {} = useAppSelector((state) => state.cart)
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: PRIMARY_COLOR,
				},
			}}
		>
			<Stack.Screen
				name="Index"
				component={DrawerNavigation}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Course"
				component={CourseScreen}
				options={({ route: { params } }) => ({
					headerTitleAlign:'center',
					headerTitle:Title,
					headerRight: HeaderAddToCart,
				})}
			/>
		</Stack.Navigator>
	)
}

export default MainNavigation
