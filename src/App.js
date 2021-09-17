import { Fragment, useState } from 'react';

import Cart from './components/Cart/Cart';
import MainHeader from './components/Layout/MainHeader';
import Meals from './components/Meals/Meals';

function App() {
  // State management
  const [cartIsDisplayed, setCartIsDisplayed] = useState(false);

  const displayCartHandler = () => {
    setCartIsDisplayed(true);
  }

  const hideCartHandler = () => {
    setCartIsDisplayed(false);
  }

  return (
    <Fragment>
      {cartIsDisplayed && <Cart onHideCart={hideCartHandler} />} { /* Only display Cart component if cartIsDisplayed is true (initially false) */ }
      <MainHeader onDisplayCart={displayCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
