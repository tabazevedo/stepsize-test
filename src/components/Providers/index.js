import React from 'react';
import { Provider as StyletronProvider } from "styletron-react";

const Providers = ({ children, styletronEngine }) => (
  <StyletronProvider value={styletronEngine}>
    {children}
  </StyletronProvider>
);

export default Providers;
