import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Navegacao extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/album">Album</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/edit">ProfileEdit</Link>
        </ul>
      </nav>
    );
  }
}

export default Navegacao;