import React from 'react';
import { Provider as StyletronProvider } from "styletron-react";
import { Provider as ReduxProvider } from "react-redux";

const Providers = ({ children, reduxStore, styletronEngine }) => (
  <ReduxProvider store={reduxStore}>
    <StyletronProvider value={styletronEngine}>
      {children}
    </StyletronProvider>
  </ReduxProvider>
);

export default Providers;
