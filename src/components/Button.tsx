import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import React from 'react'
type ButtonProps = PressableProps & {
	title: string
}
export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
	return (
		<Pressable style={[styles.btn, props.disabled && styles.disabled]} {...props} >
			<Text>{title}</Text>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	btn: {
		padding: 10,
		paddingHorizontal: 20,
		backgroundColor: 'wheat',
		borderRadius: 10,
	},
	disabled: {
		backgroundColor: '#d0D0D0',
	},
})
