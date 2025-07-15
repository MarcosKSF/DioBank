import './Header.css'
import { 
  Box,
  Center,
  Text
 } from '@chakra-ui/react'


export const Header =() => {
    return (
        <Box bg='#6d0a817e' w='100%' p={5} color='white' borderRadius = '15px'>
            <Center>
                <Text fontSize='5xl'>
                    DioBank
                </Text>
            </Center>
        </Box>
        
    )
}