import { 
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
 } from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';


function App() {
  return (
   <ChakraProvider>
        
    <Box minHeight={'100vh'} backgroundColor= '#9413dc'>
      <Header />
      <Box backgroundColor = '#ffffff' borderRadius = '25px' padding ='15'>
        <Center>
          Faça Login
        </Center>
        <Input placeholder = "Email"/>
        <Input placeholder = "Password"/>
        <Button onClick={login} colorScheme='teal' size='md'>
            Entrar
        </Button>
      </Box>
    </Box>
   </ChakraProvider>
  );
}

export default App;
