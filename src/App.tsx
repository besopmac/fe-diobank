import { Layout } from "./components/Layout";
import { Box, Button, Input } from '@chakra-ui/react'

function App() {
  return (
    <Layout>
      <Box minHeight='100vh' padding="50px">
        <h1>Faça o login</h1>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal" size="sm" width='100%'>Entrar</Button>
      </Box>
    </Layout>
  )
}

export default App
