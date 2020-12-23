import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
function App() {
  return (
    <div className="App">
      <h1>
        <AppNavBar />
        <ShoppingList />
      </h1>
    </div>
  );
}
 
export default App;
