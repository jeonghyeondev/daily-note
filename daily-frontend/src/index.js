import React from 'react';
import ReactDOM from 'react-dom';
import './styles/GlobalStyle.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from './themes/CustomThemeProvider';
// 리듀서
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <BrowserRouter>
        <App />
        <CssBaseline />
      </BrowserRouter>
    </CustomThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();