import { login } from "../services/login"
import { 
  Button,
 } from '@chakra-ui/react'
 
 interface But {
    llogin: () =>{}
}

export const Buttaon = ({llogin}: But) =>{
    return (
        <Button onClick= {llogin} colorScheme='teal' size = 'md'>
            Entrar
        </Button>
    )
}