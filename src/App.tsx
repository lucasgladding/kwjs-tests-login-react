import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
  const handleLoginEvent = () => {
    window.location.href = '/welcome';
  };

  return (
    <div id="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login onLogin={handleLoginEvent} />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">
            <Login onLogin={handleLoginEvent} />
          </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
