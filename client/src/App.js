import React from 'react';
import ItemModal from './components/ItemModal'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <AppNavbar/>
          <ItemModal/>
        </Container>
        <ShoppingList/>
      </div>
    </Provider>
  );
}

export default App;
