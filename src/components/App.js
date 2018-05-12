import React, { Fragment } from "react";
import { hot } from 'react-hot-loader'
import Header from './Header';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <main>
        <Wrapper>
          search
        </Wrapper>
      </main>
    </Fragment>
  );
};

export default hot(module)(App)
