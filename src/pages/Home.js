import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class Home extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/album" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </BrowserRouter>
      </div>
    );
  }
}
export default Home;
