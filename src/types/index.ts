import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerScreenProps as DefaultDrawerScreenProps } from '@react-navigation/drawer'


export type MainNavParamList = {
	Index: undefined
	Course: { courseId: string }
}
export type DrawerParamList = {
	Cart: undefined
	Landing: undefined
	Payements: undefined
}
export type DrawerScreenProps<Screen extends keyof DrawerParamList> = DefaultDrawerScreenProps<DrawerParamList, Screen>
export type MainNavScreenProps<Screen extends keyof MainNavParamList> = NativeStackScreenProps<MainNavParamList, Screen>
