import { Fragment } from 'react';

import Cart from './components/Cart/Cart';
import MainHeader from './components/Layout/MainHeader';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Cart />
      <MainHeader />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
