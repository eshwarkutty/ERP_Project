import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core'; 
import App from './App';
import store from './redux/store/store';


const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);


root.render(
  <Provider store={store}>
    <MantineProvider>
      <App />
    </MantineProvider>
  </Provider>
);
