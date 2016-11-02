import React from 'react';
import Home from './home/home'

const App = ({children}) => (
  <div>
    <header>
      <h1>The App for the Worldwide Stakhanovites!</h1>
      <Home />
    </header>
    {children}
  </div>
);

export default App;
