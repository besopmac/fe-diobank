import { Box } from "@chakra-ui/react"

interface ICard {
  id: number,
  details: string,
  paragraph: string,
  children?: React.ReactNode
}

export const Card = ({ children }: ICard) => {
  return (
    <Box>
      { children }
    </Box>
  )
}
