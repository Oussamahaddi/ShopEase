import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import coursesReducer from './features/courses/coursesSlice'
import cartReducer from './features/cart/cartSlice'
import paymentsReducer from './features/payements/payementsSlice'


export const store = configureStore({
	reducer: {
		courses: coursesReducer,
		cart: cartReducer,
		payments:paymentsReducer
	},
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
