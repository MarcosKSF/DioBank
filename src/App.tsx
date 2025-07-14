import { Layout } from './components/Layout';
import styled from 'styled-components';
import { 
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
 } from '@chakra-ui/react'


function App() {
  return (
   <ChakraProvider>
    <Box minHeight={'100vh'} backgroundColor= '#9413dc' padding = '25px'>
      <Box backgroundColor = '#ffffff' borderRadius = '25px' padding ='15'>
        <Center>Faça Login</Center>
        <Input placeholder = "Email"/>
        <Input placeholder = "Password"/>
        <Button colorScheme='teal' size='md'>
            Button
        </Button>
      </Box>
    </Box>
   </ChakraProvider>
  );
}

export default App;
