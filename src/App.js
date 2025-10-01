import React from 'react';
import { Provider } from 'react-redux';
// import store from './store';
import {createStore} from 'redux';
import cartReducer from './store/reducers/cart'
import AllRoute from './main-component/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(cartReducer);

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
