// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import App from 'components/App';

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('app')
//   );
// };

// render(App);

// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('components/app', () => {
//     const App = require('./components/app').default;
//     render(App);
//   });
// }

import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));