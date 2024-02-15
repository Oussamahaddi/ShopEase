import { render, screen,fireEvent } from '@testing-library/react-native'
import Entry from '../../App'
import COURSES from '../fakeData'
describe('App', () => {
	it('Landing Page', () => {
		render(<Entry />)
		COURSES.forEach((course) => {
			expect(screen.getByText(course.title)).toBeTruthy()
			expect(screen.getByText('' + course.price)).toBeTruthy()
		})
	})
	it('Course Details', async () => {
		render(<Entry />)
		const course = COURSES.find((course) => course.id === '1')!
		const pressable = await screen.findByTestId('course-card-1')
		fireEvent.press(pressable)
        
		expect(screen.getByText(course.description)).toBeTruthy()
	})
})