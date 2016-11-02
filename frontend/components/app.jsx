import React from 'react';
import Home from './home/home'

const App = ({children}) => (
  <div>
    <header className="homeHeader">
      <Home />
    </header>

    {children}
  </div>
);

export default App;
