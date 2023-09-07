import { login } from "./services/login";
import { Layout } from "./components/Layout";
import { CustomButton } from "./components/Button";
import { Card, Heading, Input, Stack } from '@chakra-ui/react'

function App() {
  return (
    <Layout>
      <Card margin={10} shadow={"lg"} width={"25%"} marginX={"auto"}>
        <Stack gap={2.5} padding={10}>
          <Heading as="h3" size={"md"} textAlign={"center"} marginBottom={5}>Faça o login</Heading>
          <Input placeholder="Email" type="email" size={"lg"} />
          <Input placeholder="Password" type="password" size={"lg"} />
          <CustomButton size="lg" onClick={login}>Entrar</CustomButton>
        </Stack>
      </Card>
    </Layout>
  )
}

export default App
