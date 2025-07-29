import { Box, Center, Input,Text } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { Buttaon } from "./Buttaon"
import { login } from "../services/login"

  
    let login_f = login

export const Func_Login =() =>{
    return(
    <Box minH={'100vh'} backgroundColor= '#9413dc'>
      <Header />
      <Box backgroundColor = '#ffffff' borderRadius = '25px' padding ='15'>
        <Center>
          <Text fontSize= 'xl'>Faça Login</Text>
        </Center>
        <Input placeholder = "Email"/>
        <Input placeholder = "Password"/>
        <Buttaon llogin={login_f} />
      </Box>
    </Box>
    )
}