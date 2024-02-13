import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../hooks'
import CourseCard from '../components/CourseCard'

const LandingScreen: React.FC = () => {
	const { courses } = useAppSelector((state) => state.courses)
	const { items } = useAppSelector((state) => state.cart)
	const unOwnedCourses = courses.filter((course) => (!items.find((item) => item.id === course.id) && !course.selected))
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={unOwnedCourses}
			renderItem={({ item }) => <CourseCard course={item} />}
			ItemSeparatorComponent={() => <View style={styles.sparator}></View>}
		/>
	)
}

export default LandingScreen

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	sparator: {
		height: 20,
	},
})
