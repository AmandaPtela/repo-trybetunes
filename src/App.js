import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Login />
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;