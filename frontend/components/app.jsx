import React from 'react';
import Home from './home/home'

const App = ({children}) => (
  <div>
    <Home/>

    {children}
  </div>
);

export default App;
