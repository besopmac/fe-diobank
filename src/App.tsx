import { Layout } from "./components/Layout";
import { Box, Input } from '@chakra-ui/react'

function App() {
  return (
    <Layout>
      <Box minHeight='100vh'>
        <h1>Faça o login</h1>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </Box>
    </Layout>
  )
}

export default App
