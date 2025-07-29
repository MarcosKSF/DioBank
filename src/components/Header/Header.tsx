import './Header.css'
import { 
  Box,
  Center,
  Image,
  Text,
 } from '@chakra-ui/react'


export const Header =() => {
    return (
        <Box bg='#6d0a817e' w='100%' p={5} color='white' borderRadius = '15px'>
            <Box> 
            <Image src='./logo.png' boxSize ='50px' borderRadius='full'/>
            </Box>
            <Center>
                <Text fontSize='5xl'>
                    DioBank
                </Text>
            </Center>
        </Box>
    )
}