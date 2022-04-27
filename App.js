import React from 'react';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import productReducer from './store/reducers/Products';
import ShopNavigation from './navigation/ShopNavigation';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
      <Provider store={store}>
          <ShopNavigation />
      </Provider>     
  );
}

