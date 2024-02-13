import { useAppDispatch, useAppSelector } from '.'
import { addToCart } from '../features/cart/cartSlice'

export const useCourse = (courseId: string) => {
	// course
	const { courses } = useAppSelector((state) => state.courses)
	const course = courses.find((course) => course.id === courseId)!

	// cart
	const cartItems = useAppSelector((state) => state.cart.items)
	const inCart = cartItems.find((item) => item.id === course?.id)
	const canAddToCart = !course?.selected && !inCart
	// add to cart
	const dispatch = useAppDispatch()
	const addToCarthandler = () => dispatch(addToCart(course))

	return { course, canAddToCart, addToCarthandler }
}
