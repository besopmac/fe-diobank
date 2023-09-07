import { Box, Heading } from '@chakra-ui/react'
export const Header = () => {
  return (
    <Box as='header' paddingY={5} backgroundColor={'green.500'} color={'white'} textAlign={'center'}>
      <Heading as='h1'>DioBank</Heading>
    </Box>
  )
}
