import { Box, Center, Input,Text } from "@chakra-ui/react"
import { Header } from "../Header/Header"
import { Button } from "../Button"
import { login } from "../../services/login"

  

export const Login =() =>{
    return(
    <Box minH={'100vh'} backgroundColor= '#9413dc'>
      <Header />
      <Box backgroundColor = '#ffffff' borderRadius = '25px' padding ='15'>
        <Center>
          <Text fontSize= 'xl'>Faça Login</Text>
        </Center>
        <Input placeholder = "Email"/>
        <Input placeholder = "Password"/>
        <Button login={login} />
      </Box>
    </Box>
    )
}

export default Login