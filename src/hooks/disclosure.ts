import { useCallback, useState } from 'react'

export const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const onOpen = useCallback(() => {
		setIsOpen(true)
	}, [])
	const onClose = useCallback(() => {
		setIsOpen(false)
	}, [])
	const toggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])
	return { isOpen, onClose, onOpen,toggle, setIsOpen }
}
export type DisclosureReturn = ReturnType<typeof useDisclosure>
