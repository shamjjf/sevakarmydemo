import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" id='scrool'>
        <AllRoute />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
