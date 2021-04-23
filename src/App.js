import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCart = () => {
    setCartIsShown(true);
  }

  const hideCart = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart}></Cart>}
        <Header onShowCart={showCart}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
