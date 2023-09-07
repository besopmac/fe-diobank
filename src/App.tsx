import { Layout } from "./components/Layout";
import { Box, Button, Center, Input } from '@chakra-ui/react'
import { login } from "./services/login";

function App() {
  return (
    <Layout>
      <Box minHeight="100vh" padding="25px">
        <Box minHeight='100vh' padding="50px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button onClick={login} colorScheme="teal" size="sm" width='100%'>Entrar</Button>
        </Box>
      </Box>
    </Layout>
  )
}

export default App
