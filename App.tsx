import { Provider } from 'react-redux'
import { store } from './src/store'
import React from 'react'
import 'react-native-gesture-handler';
import { App } from './src'
const MainApp = () => (
	<Provider store={store}>
			<App />
	</Provider>
)
export default MainApp
