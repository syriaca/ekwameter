import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyles';
import theme from './theme/theme';
import { MeterProvider } from "./context/MeterContext";
  
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MeterProvider>
        <App />
      </MeterProvider>    
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
