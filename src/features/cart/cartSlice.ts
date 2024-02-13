import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Course } from '../courses'

interface CartState {
	items: Course[]
}
const initialState: CartState = {
	items: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Course>) => {
			state.items.push(action.payload)
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const index = state.items.findIndex((course) => course.id === action.payload)
			state.items.splice(index, 1)
		},
		emptyCart: (state) => {
			state.items = []
		},
	},
})
const cartReducer = cartSlice.reducer
export const { addToCart,emptyCart, removeFromCart } = cartSlice.actions

export default cartReducer
