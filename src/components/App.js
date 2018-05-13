import React, { Fragment } from "react";
import { hot } from 'react-hot-loader'
import Header from './Header';
import Wrapper from './Wrapper';
import Search from './Search';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <main>
        <Wrapper>
          <Search/>
        </Wrapper>
      </main>
    </Fragment>
  );
};

export default hot(module)(App)
