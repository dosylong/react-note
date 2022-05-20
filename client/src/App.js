import './App.css';
import customTheme from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
