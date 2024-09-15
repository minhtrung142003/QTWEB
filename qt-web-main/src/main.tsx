import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthenContextProvider } from '@contexts/authen-context/index.tsx';
import { ProductsContextProvider } from '@contexts/features-context/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthenContextProvider>
            <ProductsContextProvider>
                <BrowserRouter>
                    <ChakraProvider disableGlobalStyle>
                        <App />
                    </ChakraProvider>
                </BrowserRouter>
            </ProductsContextProvider>
        </AuthenContextProvider>
    </React.StrictMode>
);
