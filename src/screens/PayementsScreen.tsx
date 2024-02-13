import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PaymentItem from '../components/PaymentItem'
import { useAppSelector } from '../hooks'

const PayementsScreen = () => {
	const payments = useAppSelector((state) => state.payments.payments)
	return (
		<ScrollView contentContainerStyle={styles.container}>
			{payments.length === 0 ? (
				<Text>No payments yet</Text>
			) : (
				payments.map((payment, _i) => <PaymentItem key={_i} payment={payment} />)
			)}
		</ScrollView>
	)
}

export default PayementsScreen

const styles = StyleSheet.create({
	container: {
		padding: 20,
    gap: 10,
	},
})
