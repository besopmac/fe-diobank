import { Button } from "@chakra-ui/react"

interface ICustomButton {
  onClick?: () => void,
  size?: 'sm' | 'md' | 'lg',
  children?: React.ReactNode
}

export const CustomButton = ({ onClick, children, size = 'sm' }: ICustomButton) => {
  return (
    <Button colorScheme="green" size={size} onClick={onClick}>{ children }</Button>
  )
}
