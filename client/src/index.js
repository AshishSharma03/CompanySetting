import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css'
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import UserReducer from './Reducer/UserReducer';
import { ThemeProvider } from '@mui/material';
import theme from './muiSrc/theme';


const store = configureStore({
  reducer : UserReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={theme}>
    <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


