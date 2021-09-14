import { Fragment } from 'react';

import MainHeader from './components/Layout/MainHeader';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
