import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCourse } from '../hooks/useCourse'
import { RouteProp, useRoute } from '@react-navigation/native'
import { MainNavParamList } from '../types'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

const Title: NativeStackNavigationOptions['headerTitle'] = ({ tintColor }) => {
	const params = useRoute<RouteProp<MainNavParamList>>()
	const {
		course: { title },
	} = useCourse(params.params!.courseId)!
	return (
		<Text
			style={{
				fontSize: 18,
				fontWeight: 'bold',
				color: tintColor,
			}}
		>
			{title}
		</Text>
	)
}

export default Title

const styles = StyleSheet.create({})
