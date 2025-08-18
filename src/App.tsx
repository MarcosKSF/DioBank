import { 
  ChakraProvider,
 } from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Login } from './components/Pages/Login';
import { Footer } from "./components/Footer"


function App() {
  return (
   <ChakraProvider>
     <Login />
      <Footer />
   </ChakraProvider>
  );
}

export default App;
