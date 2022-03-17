import Loader from 'components/Loader';
import { GlobalStyle } from 'globalStyles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import App from './App';

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <PersistGate loading={<Loader />} persistor={persistor}>
            <GlobalStyle />
            <App />
         </PersistGate>
      </Provider>
   </Router>,
   document.getElementById('root')
);
