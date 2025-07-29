import { 
  ChakraProvider,
 } from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Func_Login } from './components/Func_Login';
import { Footer } from "./components/Footer"


function App() {
  return (
   <ChakraProvider>
     <Func_Login />
      <Footer />
   </ChakraProvider>
  );
}

export default App;
