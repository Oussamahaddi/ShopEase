import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons'
import { useDisclosure } from '../hooks/disclosure'
import { Payment } from '../features/payements'

const formatter = Intl.DateTimeFormat('en', {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false, // Use 24-hour format
})
type ItemProps = {
	payment: Payment
}
const PaymentItem: React.FC<ItemProps> = ({ payment }) => {
	const { isOpen, toggle } = useDisclosure()
	const total = payment.courses.reduce((p, cc) => p + cc.price, 0)
	return (
		<View style={styles.contaier}>
			<View style={styles.header}>
				<Text style={styles.headerText}>{total} €</Text>
				<Text>{formatter.format(payment.date).replace(/\/|,/g, ' ')}</Text>
			</View>
			<Icons
				style={styles.toggle}
				name={isOpen ? 'remove-circle-outline' : 'add-circle-outline'}
				size={30}
				onPress={toggle}
			/>
			<View style={styles.separator} />
			<View style={[!isOpen && { display: 'none' }]}>
				{payment.courses.map(({ id, price, title }) => (
					<View key={id} style={styles.item}>
						<Text>{title}</Text>
						<Text style={styles.itemPrice}>{price} €</Text>
					</View>
				))}
			</View>
		</View>
	)
}

export default PaymentItem

const styles = StyleSheet.create({
	contaier: {
		backgroundColor: 'white',
		padding: 15,
		borderRadius: 10,
		gap: 10,
	},
	toggle: {
		alignSelf: 'flex-end',
	},
	headerText: {
		fontWeight: 'bold',
	},
	separator: { height: 2, backgroundColor: 'lightgray' },
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemPrice: {
		color: 'gray',
	},
})
