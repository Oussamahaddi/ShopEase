import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import COURSES from '../../fakeData'

export type Course = (typeof COURSES)[number]

interface CoursesState {
	courses: Course[]
}
const initialState: CoursesState = {
	courses: COURSES,
}
const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		selectCourses: (state, action: PayloadAction<Course[]>) => {
			action.payload.forEach((item) => {
				const index = state.courses.findIndex((course) => course.id === item.id)
				state.courses[index].selected = true
			})
		},
	},
})
const coursesReducer = coursesSlice.reducer
export const { selectCourses } = coursesSlice.actions

export const coursesSelector = (state: { courses: CoursesState }) => state.courses

export default coursesReducer
