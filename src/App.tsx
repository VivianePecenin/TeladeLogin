import React from 'react';
import {Registro} from './Pages/Cadastro';
import { Signin } from './Pages/Sign';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaul';
import { Router } from './route/router';


function App() {

  return(
    <>
    <ThemeProvider theme={defaultTheme}>
       <BrowserRouter>
         <Router/>
        </BrowserRouter>
      <GlobalStyle/>
      </ThemeProvider>
    </>
  )
}

export default App;
