import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Course, selectCourses } from '../courses'
import { AppThunk } from '../../store'
import { emptyCart } from '../cart/cartSlice'

export type Payment = {
	courses: Course[]
	date: number
}

interface PaymentsState {
	payments: Payment[]
}
const initialState: PaymentsState = {
	payments: [],
}
const paymentsSlice = createSlice({
	name: 'payements',
	initialState,
	reducers: {
		addPayment: (state, action: PayloadAction<Payment>) => {
			state.payments.push(action.payload)
		},
	},
})

const { addPayment } = paymentsSlice.actions

export const createPayement = (): AppThunk => (dispatch, getState) => {
	const courses = getState().cart.items
	dispatch(selectCourses(courses))
	dispatch(addPayment({ courses, date: new Date().getTime() }))
	dispatch(emptyCart())
}

const paymentsReducer = paymentsSlice.reducer

export default paymentsReducer
