import { login } from "../services/login"
import { 
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
 } from '@chakra-ui/react'

 interface ButtonProps extends ChakraButtonProps{
    login: () =>void
}

export const Button = ({login}: ButtonProps) =>{
    return (
        <ChakraButton onClick= {login} colorScheme='teal' size = 'md'>
            Entrar
        </ChakraButton>
    )
}